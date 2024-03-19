import React from "react";

const languages = [
    "Javascript",
    "Python",
    "Java",
    "Elm",
    "TypeScript",
    "C#",
    "F#",
]

//One liner
const Language = ({ languages }) => <li>{languages}</li>

Language.propTypes = {
    message: React.PropTypes.string.isRequired
}

/**
* If there are more than one line.
* Please notice that round brackets are optional here,
* However it's better to use them for readability
*/

const LanguageList = ({ languages }) => {
    <ul>
        {
            languages.map(language => <Language language={language} />)
        }
    </ul>
}

LanguageList.PropTypes = {
    languages: React.PropTypes.array.isRequired
}

/**
* This syntax is used if there are more work beside just JSX presentation
* For instance some data manipulations needs to be done.
* Please notice that round brackets after return are required,
* Otherwise return will return nothing (undefined)
*/

const LanguageSection= ({header, languages}) => {
    //do some work
    const formatLanguages = languages.map(language => language.toUpperCase())
    return (
        <fieldset>
            <legend>{header}</legend>
            Langua
        </fieldset>
    )
}