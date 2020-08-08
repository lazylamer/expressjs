const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

class Course {
    constructor(title, price, name, image) {
        this.title = title;
        this.price = price;
        this.name = name;
        this.image = image;
        this.id = uuidv4();
    }

    toJSON() {
     return {
         title: this.title,
         price: this.price,
         name: this.name,
         image: this.image,
         id: this.id,
     }
    }

    async save() {
        const courses = await Course.getAll();
        courses.push(this.toJSON());

        return new Promise((resolve, reject) => {

            fs.writeFile(
                path.join(__dirname, '..', 'db', 'db.json'),
                JSON.stringify(courses),
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve()
                    }
                }
            )
        })
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'db', 'db.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
                }
            )
        })
    }
}

module.exports = Course;