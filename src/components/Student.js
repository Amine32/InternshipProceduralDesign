import {Table} from "react-bootstrap";

export default function Student() {
    return (
        <Table bordered hover>
            <thead className="table-secondary">
            <tr>
                <th>Компания</th>
                <th>Позиция</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td rowSpan="3">Bi.Zone</td>
            </tr>
            <tr>
                <td>Авто Тестирования Python</td>
                <td className="link-success text-decoration-underline">Подать заявку</td>
            </tr>
            <tr>
                <td>Го разрабочик</td>
                <td>ожидается приглашения на собеседование</td>
            </tr>
            <tr>
                <td>УЦР</td>
                <td>Андройд разрабочик</td>
                <td>Собеседование в: 20.11.2022 17:00</td>
            </tr>
            <tr>
                <td>Компания 3</td>
                <td>React разрабочик</td>
                <td>
                    <span className="link-success text-decoration-underline">Принять предложение</span>
                    &nbsp;
                    /
                    &nbsp;
                    <span className="link-danger text-decoration-underline">Отказаться</span>
                </td>
            </tr>
            <tr className="table-success">
                <td>Компания 4</td>
                <td>.NET Разрабочик</td>
                <td>Принято</td>
            </tr>
            </tbody>
        </Table>
    )
}