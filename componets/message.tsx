export default function Message(props: any) {
    const messages = props.messages;
    const listMessage = messages.map((message: any) =>
        <li>{message}</li>
    )

    return (
        <div>
            <textarea></textarea>
            <button>submit</button>
            <ul>{listMessage}</ul>
        </div>
    )
}