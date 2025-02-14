import React from 'react'

const Specifications = () => {
    return (
        <section id="Specifications" name="Specifications" className="padding w-full h-full block space-y-10 md:space-y-20 font-inter">
            <h4 className="font-bold text-2xl tracking-wide text-center sm:text-5xl lg:text-6xl">
                Specifications
            </h4>
            <div className="overflow-x-auto thumbnail">
                <table className="w-full border border-collapse border-gray-300">
                    <thead className="text-white bg-[#FF7F00]">
                        <tr>
                            {specs.map((spec, idx) => (
                                <th
                                    key={idx}
                                    className="px-4 py-2 text-sm font-semibold text-center border border-[#86868B]"
                                >
                                    {spec.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {specs.map((spec, idx) => (
                                <td
                                    key={idx}
                                    className="px-4 py-2 text-sm text-center bg-transparent border border-[#86868B] text-white"
                                >
                                    {spec.value}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Specifications


const specs = [
    { label: "label 1", value: "value" },
    { label: "label 2", value: "value" },
    { label: "label 3", value: "value" },
    { label: "label 4", value: "value" },
    { label: "label 5", value: "value" },
    { label: "label 6", value: "value" },
    { label: "label 7", value: "value" },
    { label: "label 8", value: "value" },
]