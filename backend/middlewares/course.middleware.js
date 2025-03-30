import User from "../models/user.model.js"
import Course from "../models/course.model.js"
// import Quiz from "../models/user.model.js"

const hasEnrolled = async (req, res, next) => {
    try {
        const userId = req.user;
        const { courseId } = req.body;

        if (!userId || !courseId) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                message: "Course Not Found"
            })
        }

        if (course.enrolledStudents.includes(userId)) {
            return next();
        }

        return res.status(403).json({
            message: "Student has not enrolled in the course"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error || Course Middleware",
            error: error.message
        })
    }
}

const isCourseInstructor = async (req, res, next) => {
    try {
        const { id, role } = req.user;
        const { courseId } = req.body;

        if (!req.user || !courseId) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (role !== "instructor") {
            return res.status(403).json({
                message: "you are not the instructor."
            })
        }

        const course = await Course.findById(courseId);

        if (course.instructor !== id) {
            return res.status(403).json({
                message: "You are not the the instructor of the course"
            })
        };

        return next();

    } catch (error) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }
}


const courseMiddleware = {
    hasEnrolled, isCourseInstructor
}

export default courseMiddleware;