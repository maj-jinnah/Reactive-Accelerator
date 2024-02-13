/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const Form = ({ status }) => {
    // visual states: empty, typing, submitting, success, error

    if (status === "success") return <h1 className="mt-5">That's right!</h1>;
    return (
        <>
            <h2>City quiz</h2>
            <p>What city is located on two continents?</p>
            <form>
                <textarea
                    disabled={status === "submitting"}
                    className="border "
                ></textarea>
                <br />
                <button
                    disabled={status === "empty" || status === "submitting"}
                    className="px-3 py-1 border"
                >
                    Submit
                </button>
                {status === "submitting" && <p>Loading...</p>}
                {status === "error" && (
                    <p style={{ color: "red" }}>
                        Good guess but a wrong answer. Try again !!!
                    </p>
                )}
            </form>
        </>
    );
};

export default Form;
