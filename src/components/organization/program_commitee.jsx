import program_commitee_list from "./program_commitee_list"
import Sponsor from "../Sponsors/Sponsor"

const ProgramCommitee = () => {
    return (<>
        <Sponsor users={program_commitee_list} hideImage={true} word="Organizing Committee" />
    </>)
};

export default ProgramCommitee;