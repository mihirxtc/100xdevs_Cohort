// wrapper
function App() {
    return <div>
        <CardWrapper>
            I'm Tech Nerd;
        </CardWrapper>
        <CardWrapper>
            Who else is Tech Nerd?
        </CardWrapper>
        <CardWrapper>
            Reach me if your are :)
        </CardWrapper>
        <CardWrapper>
            Here's my twitter - @mihirxtc
        </CardWrapper>
        <CardWrapper>
            Here's my github - @mihirxtc
        </CardWrapper>
    </div>
}

function CardWrapper({children}) {
    console.log(children);
    return <div style={{border: "2px solid lightgrey", padding: "8px", margin: "5px", fontSize: "24px", borderRadius: "6px", fontFamily: "JetBrains Mono"}}>
        {children}
    </div>   
}

export default App;