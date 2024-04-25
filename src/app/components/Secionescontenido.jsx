
export default function sectionhtml(props) {
    const {title,description, stateDisponible, conocerMas } = props;
    return (
        <article className="flex gap-3 justify-center items-center text-center w-full p-2">
            <section className="felx items-center justify-around w-full divide- divide-dashed">
                <div className="flex justify-between w-full items-center ">
                    <div className="flex gap-1 flex-col justify-start items-start ">
                        <div className="flex gap-5 items-center justify-start">
                            <h2 className="text-white text-2xl font-bold">{title}</h2>
                            {stateDisponible}
                        </div>
                        <p className="text-gray-500">
                            {description}
                        </p>
                    </div>
                    {conocerMas}
                </div>
            </section>
        </article>
    );
}
