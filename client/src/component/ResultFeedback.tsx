import { Content } from "../type/contentType";
import { Issue } from "../type/resultType";
type ResultFeedbackProps = {
    isCorrect: boolean;
    bandScore: number;
    feedback: string;
    issues: Issue[];
    currentContent: Content;
    isEnglishToVietnamese: boolean;
};
const ResultFeedback = ({
    isCorrect,
    bandScore,
    feedback,
    issues,
    currentContent,
    isEnglishToVietnamese
}: ResultFeedbackProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Result:</h3>
            {isCorrect ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
                    <p className="font-bold">Correct! (IELTS Band {bandScore.toString()})</p>
                    <p className="text-gray-700 whitespace-pre-line">{feedback}</p>
                </div>
            ) : (
                <>
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                        <p className="font-bold">Incorrect</p>
                        <ul className="list-disc list-inside">
                            {issues.map((issue, index) => (
                                <li key={index}>{issue.description}</li>
                            ))}
                        </ul>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Correct Translation:</h3>
                    <p className="text-gray-700">
                        {isEnglishToVietnamese ? currentContent.vietnamese : currentContent.english}
                    </p>
                </>
            )}
        </div>
    );
};

export default ResultFeedback;