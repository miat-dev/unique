'use client'
import { useRef } from 'react';
import './page.css'
const PollScore = () => {
    let poll_data = {
        poll_name: "Bihar Assembly",
        total_seat: 96,
        parties: [
            { p_name: "INC", seat: 54, p_color: "0072af" },
            { p_name: "AAP", seat: 19, p_color: "2a9df8" },
            { p_name: "BJP", seat: 15, p_color: 'ff6203' },
            { p_name: "OTHERS", seat: 8, p_color: "54a655" }
        ]
    }
    const counting_seat = poll_data.parties.reduce((prev, val) => prev + val.seat, 0);
    //poll_data.total_seat = counting_seat
    poll_data.parties.sort((a, b) => b.seat - a.seat);
    //console.log(sorted_no_party)

    return (
        <div className="score">
            <div className='election-result'>
                Election Result <span>LIVE</span>
            </div>
            <Poll
                parties={poll_data.parties}
                poll_name={poll_data.poll_name}
                total_seat={poll_data.total_seat}
                counting_seat={counting_seat}
            />
        </div>
    )
}
export default PollScore;

const Poll = ({ parties, total_seat, poll_name, counting_seat }) => {
    const party_bar = useRef();
    return (
        <div className="poll_bar">
            <PollDetails poll_name={poll_name} total_seat={total_seat} counting_seat={counting_seat} />
            <div ref={party_bar} className="party_bar">
                {
                    parties.map((party, idx) => {
                        return (
                            <div key={idx} style={{ backgroundColor: `#${party.p_color}`, width: `${100 * party.seat / total_seat}%` }}></div>
                        )
                    })}
            </div>
            <div className="party_name">
                {
                    parties.map((party, idx) => {
                        return (
                            <div key={idx}>
                                <div style={{ color: `#${party.p_color}` }} >{party.p_name}</div>
                                <div>{party.seat}</div>
                            </div>
                        )
                    })}
            </div>
            <div className='live-update'>{poll_name} 
            <span> Live Update <img src="arrow-right-solid.svg" alt="" /> </span> 
            </div>
        </div>
    )
}
const PollDetails = ({ poll_name, total_seat, counting_seat }) => {
    return (
        <div className="poll_details">
            <div className="poll_name">
                <div>{poll_name}</div>
                <div>
                    {counting_seat}
                    <span style={{color:"#999"}}>/{total_seat}</span>
                </div>
            </div>
            <div className="half_cnt">{Math.ceil(total_seat / 2)}</div>
        </div>
    )
}