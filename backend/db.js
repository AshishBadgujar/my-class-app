
export const connectDB = () => {
    const db = new Datastore({ filename: 'data/students.json', autoload: true })
}
