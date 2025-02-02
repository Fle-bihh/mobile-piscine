import { add, subtract, multiply, divide, parseNumber } from "@/functions/math.functions";

export function evaluateExpression(expression: string): string {
    if (!expression || expression.trim() === "") {
        return "";
    }

    try {
        const tokens = tokenize(expression);
        let index = 0;

        function parseExpression(): number {
            let result = parseTerm();
            while (index < tokens.length && (tokens[index] === "+" || tokens[index] === "-")) {
                const op = tokens[index++];
                const term = parseTerm();
                result = op === "+" ? add(result, term) : subtract(result, term);
            }
            return result;
        }

        function parseTerm(): number {
            let result = parseFactor();
            while (index < tokens.length && (tokens[index] === "x" || tokens[index] === "/")) {
                const op = tokens[index++];
                const factor = parseFactor();
                result = op === "x" ? multiply(result, factor) : divide(result, factor);
            }
            return result;
        }

        function parseFactor(): number {
            if (index >= tokens.length) {
                throw new Error("Unexpected end of expression");
            }

            if (tokens[index] === "-") {
                index++;
                return -parseFactor();
            }

            return parseNumber(tokens[index++]);
        }

        const result = parseExpression();

        if (index < tokens.length) {
            throw new Error("Invalid expression");
        }

        return result.toString();
    } catch (error) {
        return "Error";
    }
}

function tokenize(expression: string): string[] {
    const tokens: string[] = [];
    let numberBuffer = "";

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if ((char >= "0" && char <= "9") || char === ".") {
            numberBuffer += char;
        } else if (char === "+" || char === "-" || char === "x" || char === "/") {
            if (numberBuffer !== "") {
                tokens.push(numberBuffer);
                numberBuffer = "";
            }
            tokens.push(char);
        } else if (char.trim() !== "") {
            throw new Error("Invalid character: " + char);
        }
    }

    if (numberBuffer !== "") {
        tokens.push(numberBuffer);
    }

    return tokens;
}
