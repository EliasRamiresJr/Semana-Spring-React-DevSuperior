import axios, { Axios } from "axios"
import { toast } from "react-toastify"
import ico from "../../assets/img/notification-icon.svg"
import { BASE_URL } from "../../utlis/request"
import "./styles.css"

type Props = {
    saleId: number
}

function handleClick(id :number){
    axios (`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso")
    })
}

function NotificationButton({ saleId }) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={ico} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
