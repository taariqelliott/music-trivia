import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import '../styles/styles.css'

export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reload, setReload] = useState()




    useEffect(() => {
        const apiData = {
            method: "GET",
            headers: {
                "x-api-key": "2B0BdZfwCTB3tblpEazLOg==vt0aJF9nHqjsU8Zd",
            },
        };

        setIsLoaded(false)

        axios
            .get("https://api.api-ninjas.com/v1/trivia?category=music", apiData)
            .then((response) => {
                setQuestions(response.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [reload]);
    console.log("Component Rendered");

    return (
        <div>
            <NavBar />
            <div className="reload">
                <h1 style={{ textAlign: "center" }}>Home!</h1>
                <button onClick={() => setReload(!reload)} className="reloadButton">New Question</button>

            </div>
            <div className="contentDiv">
                {isLoaded ? (
                    <div>
                        {questions.map((question) => (
                            <div className="questionsDiv" key={question.question}>
                                <h1>{question.question}</h1>
                                <div className="answerBG">
                                    <h2 className="answerDiv">{question.answer}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <DNA
                            visible={true}
                            height="400"
                            width="400"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
