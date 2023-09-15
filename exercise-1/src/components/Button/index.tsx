import './styles.css'

type Props = {
    title: string;
}

export default function Button({ title } : Props) {
    return (
        <div className='button'>{title}</div>
    );
}