
import TopRated from '../../Components/Comman/TopRated';
export default function speciestoprated() {
    // const [activeTab, setActiveTab] = useState("");

    return (
        <>
            <section className="mt-3 species-rated">
                <div className="container-lg container-inner-padding">
               {/* <TopRated 
    slides={3}          // slidesToShow
    slidesToScroll={3}  // slidesToScroll
    style={{ width: "315.083px" }} 
    accessibility={false}  // ✅ correct
/> */}
 <TopRated />


                </div>
            </section>


        </>
    )
}