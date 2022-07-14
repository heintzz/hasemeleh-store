import { useParams } from 'react-router-dom'

export default function About({ items }) {
    const { id } = useParams()
    const refItem = items.find((item) => item.id == id)

    return <img src={refItem.img} />
}
