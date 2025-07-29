const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model =genAI.getGenerativeModel({
    model:'gemini-2.0-flash',
    systemInstruction:``
})

async function codeaireview_generate(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports.code_ai_review = async (req, res) => {
    const code_body = req.body.code;
    if(!code)
    {
        return res.status(400).send('No prompt, write a prompt');
    }
    else{
        const response = await codeaireview_generate(code_body);
        res.send(response);
    }
}