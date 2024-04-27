
export default function Buttons(props) {
    const { text , img } = props;
    
    return (
        <button 
        className="gap-3 flex justify-center items-center bg-gray-700   hover:bg-purple-500 text-white font-bold py-2 px-4  border-purple-800 hover:border-purple-700 rounded"
        >{img} {text}
        </button>
    );
}
