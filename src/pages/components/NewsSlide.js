import connect from "../../../backend/index";
import News from "../../../models/News";

export const getServerSideProps = async()=>{
    try{
        console.log("connecting");
        await connect();
        console.log("connected DB");

        console.log("fetching Document");
        const Tests = await News.find();
        console.log("fetched succesful");

        return {
            props: {
                Tests: JSON.parse(JSON.stringify(Tests)), 
            },
        };

    }catch(error){
        console.log(error);
        return{
            notFound: true,
        }
    }
}

export default function slide({Tests}){
    return(
        <div className="container">
           {Tests.map(test =>(
            <div key={test._id}>
                <h2>
                    {test.title}
                </h2>
                <p>
                    {test.description}
                </p>
            </div>
           ))} 
        </div>
    )
}