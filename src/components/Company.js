import {Table} from "react-bootstrap";

export default function Company() {
    return (
        <Table bordered hover>
            <thead className="table-secondary">
            <tr>
                <th>Студент</th>
                <th>Позиция</th>
                <th>Статус</th>
                <th>Оценка</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan="3">Иванов Иван Иванович</td>
            </tr>
            <tr>
                <td>Авто Тестирования Python</td>
                <td className="link-secondary text-decoration-underline">Назначить дату собеседования</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Го разрабочик</td>
                <td>Собеседование в: 20.11.2022 17:00 / <span className="link-success text-decoration-underline">Завершить Собеседование</span></td>
                <td>-</td>
            </tr>
            <tr>
                <td>Тесторов Тестер Тестерович</td>
                <td>Авто Тестирования Python</td>
                <td><span className="link-success text-decoration-underline">Поставить оценку на собес</span> / <span className="link-danger text-decoration-underline">Отказать заявителю</span></td>
                <td>-</td>
            </tr>
            <tr>
                <td>Пивоваров Алексей Александрович</td>
                <td>Авто Тестирования Python</td>
                <td><span className="link-success text-decoration-underline">Принять</span> /
                    &nbsp;
                    <span className="link-danger text-decoration-underline">Отказать</span>
                </td>
                <td>8/10</td>
            </tr>
            <tr>
                <td>Кузмина Екатерина Геннадиевна</td>
                <td>Го разрабочик</td>
                <td>Ожидается ответ от студента</td>
                <td>9/10</td>
            </tr>
            <tr className="table-success">
                <td>Пупкин Василий Петрович</td>
                <td>Авто Тестировчик Python</td>
                <td>Принято</td>
                <td>6.5/10</td>
            </tr>
            </tbody>
        </Table>
    )
}