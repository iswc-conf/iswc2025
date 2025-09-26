import React from "react";
import './attending.css';
import SWSA from "./semantic_web_science_association.png";

export const Childcare = () => {
    return (
        <div>
            <div className="mt-[74px] px-4 pt-2 bg-white flex items-center justify-center">
            </div>

            <div className="container mx-auto px-4 lg:px-8 lg:pb-12 mt-12">
                <h1 className="text-3xl font-bold text-center text-[#e94607]">Childcare</h1>

                <p className="mb-4">
                    If you are planning to travel to ISWC with your kids and need to arrange
                    childcare, the following providers offer services in English:
                </p>

                <ul className="list-disc list-inside mb-6">
                    <li>
                        <a
                            href="https://www.carefinder.jp/en/find-babysitter/nara"
                            target="_blank"
                        >
                            https://www.carefinder.jp/en/find-babysitter/nara
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://kxn.co.jp/service/visit/"
                            target="_blank"
                        >
                            https://kxn.co.jp/service/visit/
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://babysitters.jp/en/"
                            target="_blank"
                        >
                            https://babysitters.jp/en/
                        </a>
                    </li>
                </ul>

                <p className="mb-4">
                    Please reach out to them directly to confirm their availability, rates,
                    and services, and to make any necessary reservations in advance.
                </p>

                <p className="mb-4">
                    Please note that{" "}
                    <span className="font-semibold">
                        childcare is not provided by the ISWC conference itself; these are
                        independent providers
                    </span>
                    . Nonetheless, do not hesitate to contact us if you require assistance.
                </p>

                <p className="mt-6 font-semibold">
                    <a
                        href="mailto:iswc2025-local@easychair.org"
                    >
                        iswc2025-local@easychair.org
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Childcare;