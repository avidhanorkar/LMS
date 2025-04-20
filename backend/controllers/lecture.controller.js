import Course from '../models/course.model.js';
import Lecture from '../models/lecture.model.js';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import Ffmpeg from 'fluent-ffmpeg';
import { AssemblyAI } from 'assemblyai';
import { GoogleGenAI } from '@google/genai';


const addLecture = async (req, res) => {
    try {
        const { courseId, name, video } = req.body;
        if (!courseId || !name || !video) {
            return res.status(500).json({
                message: "All Fields are required"
            })
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({
                message: "the course is not found || invalid course Id"
            })
        };

        const newLecture = new Lecture({
            lectureName: name,
            lectureVideo: video,
            course: courseId
        });
        await newLecture.save();

        course.lectures.push(newLecture._id)
        await course.save();

        return res.status(200).json({
            message: "Lecture added Successfully",
            lecture: newLecture,
            course: course
        })
    } catch (error) {
        console.log("Error in adding the lecture: ", error);
        return res.status(500).json({
            message: "Error in adding the lecture",
            error: error.message
        })
    }
}

const getLecture = async (req, res) => {
    try {
        const { lectId } = req.body;
        if (!lectId) {
            return res.status(404).json({
                message: "All fields are required"
            })
        }

        const lecture = await Lecture.findById(lectId);
        return res.status(200).json({
            message: "Lecture is retrieved successfully",
            lecture: lecture
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error || While retrieving the lectures",
            error: error.message
        })
    }
}

const getAll = async (req, res) => {
    const { courseId } = req.body;

    const course = await Course.findById(courseId).populate("lectures");

    return res.status(200).json({
        message: "Lectures of a course are retrieved successfully",
        lectures: course.lectures
    })
}

// Outline: Extracting Audio using FFMPEG -> Transcribing the audio using AssemblyAI -> Summarizing the transcript using Google GenAI
const createSummary = async (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    try {
        const lectureId = req.params.id;
        const lecture = await Lecture.findById(lectureId);

        if (!lecture) {
            return res.status(404).json({ message: "Lecture not found" });
        }

        const apiKey = process.env.AssemblyAI_API_KEY;
        const client = new AssemblyAI({ apiKey });

        Ffmpeg.setFfmpegPath(ffmpegInstaller.path);

        const input = lecture.lectureVideo.replace(/\/$/, "");
        const output = path.join(__dirname, 'output.mp3');

        // Function to convert video to audio
        const convertToAudio = (input, output) => {
            return new Promise((resolve, reject) => {
                Ffmpeg(input)
                    .noVideo()
                    .output(output)
                    .on('end', () => {
                        console.log('Audio extraction complete.');
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error('Error during conversion:', err);
                        reject(err);
                    })
                    .run();
            });
        };

        // Convert video to audio
        await convertToAudio(input, output);

        // Read and upload audio file to AssemblyAI

        // Transcribe the uploaded audio
        const params = {
            audio: './controllers/output.mp3'
        }
        const transcriptResponse = await client.transcripts.transcribe(params);

        // Delete the audio file after uploading
        fs.unlinkSync(output);

        let summary;
        const summarize = async () => {
            const genAI = new GoogleGenAI({ apiKey: 'AIzaSyCm03-_L64N_9sdV86pns0CIzbOkuMuqT8' });
                
            // Step 2: Combine chunk summaries and summarize them again
            const finalPrompt = `Here are summaries of different parts of a lecture: ${transcriptResponse.text}.Please provide a final, concise summary of the full lecture.`;
        
            const response = await genAI.models.generateContent({
                model: "gemini-2.0-flash",
                contents: finalPrompt,
            });

            summary = response.text;
            console.log("Final Summary:", summary);
        };
        

        await summarize();
        lecture.summary = summary;
        lecture.save();

        return res.status(200).json({
            message: "Lecture is summarized successfully",
            summary: summary,
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: "Internal Server Error || While generating the audio file",
            error: error.message
        });
    }
};





const lectureController = {
    // Outline: Extracting Audio using FFMPEG -> Transcribing the audio using AssemblyAI -> Summarizing the transcript using Google GenAI
    addLecture, getLecture, getAll, createSummary
}

export default lectureController;