import {Table} from "react-bootstrap";

export default function Curator() {
    return(
        <Table bordered hover>
            <thead className="table-secondary">
            <tr>
                <th>Студент</th>
                <th>Компания</th>
                <th>Позиция</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            <tr className="table-danger">
                <td>Позоров Позор Позорович</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td rowSpan="5">ФИО</td>
            </tr>
            <tr>
                <td rowSpan="3">Bi.Zone</td>
            </tr>
            <tr>
                <td>Авто Тестирования Python</td>
                <td>ожидается приглашения на собеседование</td>
            </tr>
            <tr>
                <td>Го Разрабочик</td>
                <td>Собеседование в: 20.11.2022 17:00</td>
            </tr>
            <tr>
                <td>ЦФТ</td>
                <td>iOS Разработка</td>
                <td>Ожидается ответ от компании</td>
            </tr>
            <tr className="table-info">
                <td>Тестеров Тестор Тесторич</td>
                <td>УЦР</td>
                <td>Андройд Разрабочик</td>
                <td>Получил Оффер (Ожидается ответ от студента)</td>
            </tr>
            <tr className="table-success">
                <td rowSpan="3">Иванов Иван Иванович</td>
            </tr>
            <tr className="table-danger">
                <td>УЦР</td>
                <td>Андройд Разрабочик</td>
                <td className="link-danger">Отказ от компании</td>
            </tr>
            <tr className="table-success">
                <td>Bi.Zone</td>
                <td>Авто Тестировчик</td>
                <td className="link-success">Принято</td>
            </tr>
            </tbody>
        </Table>
    )
}