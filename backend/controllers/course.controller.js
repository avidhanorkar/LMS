import User from '../models/user.model.js';
import Course from '../models/course.model.js';

const createCourse = async (req, res) => {
    try {
        const { name, desc, price, thumbnail } = req.body;
        const userId = req.user.id;

        if (!name || !desc || !price || !thumbnail) {
            return res.status(200).json({
                message: "Enter all the required fields."
            })
        }

        const newCourse = new Course({
            courseName: name,
            courseDescription: desc,
            coursePrice: price,
            thumbnail: thumbnail,
            instructor: userId
        })

        await newCourse.save();

        return res.status(200).json({
            message: "Course created Successfully",
            course: newCourse
        })
    } catch (error) {
        console.log("Error in creating course: ", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();

        return res.status(200).json({
            message: "Courses Retrieved Successfully",
            courses: courses
        })
    } catch (error) {
        console.log("Error in retreiving all: ", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getCourseById = async (req, res) => {
    try {
        const { courseId } = req.body;

        const course = await Course.findById(courseId).populate('instructor');

        return res.status(200).json({
            message: "Course is retreived successfully",
            course: course
        });
    } catch (error) {
        console.log("Error in retreiving the course: ", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const updateCourse = async (req, res) => {
    try {
        const { courseId, name, desc, price, thumbnail } = req.body;

        if (!courseId) {
            return res.status(500).json({
                message: "The course id is required."
            })
        }

        const course = await Course.findById(courseId)

        course.courseName = name || course.courseName;
        course.courseDescription = desc || course.courseDescription;
        course.coursePrice = price || course.coursePrice;
        course.thumbnail = thumbnail || course.thumbnail;

        await course.save();

        return res.status(200).json({
            message: "Course Updated Successfully",
            course: course
        })
    } catch (error) {
        console.log("Error in updating the course: ", error);
        return res.status(500).json({
            message: "Error in updating the course",
            error: error.message
        })
    }
}

const courseController = {
    createCourse, getAllCourses, getCourseById, updateCourse
}

export default courseController;