import { useState } from "react";

function Count(){

    const [count, setCount] = useState(0)

    return(
        <div>

            <button onClick={() => setCount(count + 1)}>Somar</button>
            <button onClick={() => setCount(count - 1)}>Subtrair</button>
            <p>Número: {count}</p>

        </div>
    )
}

export default Count;
