import Course from '../models/course.model.js';
import Lecture from '../models/lecture.model.js';

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
    const {courseId} = req.body;

    const course = await Course.findById(courseId).populate("lectures");

    return res.status(200).json({
        message: "Lectures of a course are retrieved successfully",
        lectures: course.lectures
    })
}

// Todo: Integrate AI to generate Lecture (Video) Summary

const lectureController = {
    addLecture, getLecture, getAll
}

export default lectureController;