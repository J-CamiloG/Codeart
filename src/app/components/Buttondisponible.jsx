export default function ButtonDisponible(props) {
    const {text} = props;
    return(
        <>
            <div class="p-1 bg-purple-800 items-center text-white leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-purple-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                <span class="font-semibold mr-2 text-left flex-auto">{text}!</span>
            </div>
        </>
    )
}