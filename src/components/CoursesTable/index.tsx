
import './styles.css';

const CoursesTable = () => {

    const courses = [
        {
            name: "Bootcamp Spring",
            language: "Java, Spring",
            hours: 160,
            school: "DevSuperior"
        },
        {
            name: "Bootcamp React",
            language: "React",
            hours: 160,
            school: "DevSuperior"
        },
        {
            name: "C# Completo e Profissional",
            language: "C#",
            hours: 68,
            school: "Udemy"
        },
        {
            name: "C# Programação Orientada a Objetos",
            language: "C#",
            hours: 38,
            school: "Udemy"
        },
        {
            name: "VBA - Visual Basic for Applications",
            language: "Visual Basic",
            hours: 40,
            school: "Infoserv"
        },
        {
            name: "Power BI",
            language: "Power BI",
            hours: 30,
            school: "Infoserv"
        },
        {
            name: "Desenvolvimento Front-End",
            language: "Visual Basic",
            hours: 6,
            school: "Udemy"
        },
        {
            name: "Desenvolvimento Back-End",
            language: "Visual Basic",
            hours: 6,
            school: "Udemy"
        },
        {
            name: "Desenvolvimento Avançado",
            language: "Visual Basic",
            hours: 6,
            school: "Udemy"
        },
        {
            name: "Dominando banco de dados MySQL",
            language: "MySQL",
            hours: 4,
            school: "Udemy"
        },
    ]

    return(
        <div className='courses-table-container'>
            <h2 className='courses-table-title'>Courses</h2>

            <table className='courses-table'>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Language</th>
                        <th>Hours</th>
                        <th>School</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <td>{course.name}</td>
                            <td>{course.language}</td>
                            <td>{course.hours}</td>
                            <td>{course.school}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>

    );
}

export default CoursesTable;