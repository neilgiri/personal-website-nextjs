import PreprintItem from './PreprintItem'
import data from './data/preprints.json'

const PreprintList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Preprints</h2>
            <div>
              {data.map((preprint, index) => (
                <PreprintItem preprint={preprint} index={index} key={index}/>
              ))}
            </div>

        </section>
    );
};



export default PreprintList;
