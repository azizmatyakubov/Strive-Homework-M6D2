import { DataTypes } from "sequelize"; // Right now
import sequelize from '../index.js'

const Blog = sequelize.define("blogs", {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})


export default Blog;