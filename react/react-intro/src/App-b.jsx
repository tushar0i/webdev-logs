// component wrapper in react 

function App_b() {
    return <>
        {/* we will never use this syntax */}
        {/* <CardWrapper innerComponent={<TextComponent title={"this is the title that i am passing to the text component"}/>}/> */}

        {/* mostly this syntax is being used */}
        <CardWrapper>
            {/*pass the main logic here */}
            <TextComponent title={"this is the title that i am passing to the text component"} />
        </CardWrapper>
        
        <CardWrapper>
            <CardWrapper>
                <CardWrapper>
                    <div>
                        <h2>Just testing the wrapper </h2>
                    </div>
                </CardWrapper>
            </CardWrapper>
        </CardWrapper>
    </>
}

function TextComponent({ title }) {
    return <div>
        <h2>this is the text component which is wrapped inside the wrapper component</h2>
        <h3>{title}</h3>
    </div>
}

function CardWrapper({ children }) {
    return <div style={{ border: "2px solid blue", padding: "20px", margin: "30px" }}>
        <h1>hi there I am a wrapper component</h1>
        {children}
    </div>
}

// function CardWrapper({innerComponent}){
//     return <div style={{border:"2px solid blue", padding:"20px" , margin:"30px"}}>
//         <h1>hi there I am a wrapper component</h1>
//         {innerComponent}
//     </div>
// }

export default App_b