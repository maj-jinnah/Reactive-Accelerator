/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { useState } from "react";

function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.toLowerCase() === "dhaka") {
                resolve();
            } else {
                reject(new Error("Good guess but a wrong answer. Try again!"));
            }
        }, 3000);
    });
}

const Form = () => {
    // visual states: typing, submitting, success

    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    const handelTextChange = async (e) => {
        setError(null);
        setAnswer(e.target.value);
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting")
        try {
            setStatus("success")
            console.log(answer);
            await submitForm(answer);
        } catch (err) {
            setStatus("typing")
            setError(err.message);
        }
    };

    
    if (status === "success") return <h1 className="mt-5">That's right!</h1>;

    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form onSubmit={handelSubmit}>
                <textarea
                    value={answer}
                    onChange={handelTextChange}
                    className="border"
                    disabled={status === "submitting"}
                ></textarea>
                <br />
                <button
                    disabled={answer.length === 0 || status === "submitting"}
                    className="px-3 py-1 border"
                >
                    Submit
                </button>
                {status === "submitting" && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </>
    );
};

export default Form;
