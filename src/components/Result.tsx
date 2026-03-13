export default function Result({result}:any){
    if(!result) return null;

    return (
        <div className="bg-gray-50 border rounded-lg p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4"> 
Analysis Result
            </h2>

<p className="mb-2">
Match Score: <b>{result.matchScore}%</b>
</p>

<p className="mb-4">
    Similarity Score: <b>{result.similarityScore}</b>
</p>
        
        <div className="mb-4">
            <h3 className="font-semibold">Matched Skills</h3>
            <ul className="list-disc pl-5"> 
                  {result.matchedSkills.map((s:string) =>(
                    <li key={s}>{s}</li>
                  ))
                  }
            </ul>

        </div>

<div>
        <h3 className="font-semibold text-red-500">
          Missing Skills
        </h3>
        <ul className="list-disc pl-5">
          {result.missingSkills.map((s: string) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

        </div>


    )
}