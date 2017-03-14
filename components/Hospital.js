import React from 'react';
import Worker from './worker';

class Hospital extends React.Component {

    render() {

        this.props.workers.filter((worker) => worker.location == 'hospital').map(worker => {
            if (worker.key == 2) {
                worker.src = './img/dudes/3_sick.png';
            }
            else if (worker.key == 5) {
                worker.src = './img/dudes/6_sick.png';
            }
            else if (worker.key == 1) {
                worker.src = './img/dudes/2_holiday.png';
            }
        });
        
        let hospitalClass = 'hidden';
        let hospitalClass2 = 'hospital-visibility';

        if (!this.props.actionScreen) {
            hospitalClass2 = 'position-relative hospital-box';
            hospitalClass = 'hospital-box';
        }
        else if (this.props.currentDay != 3) {
            hospitalClass2 = 'position-relative hospital-box';

        }
        else if (this.props.currentDay != 24) {
            hospitalClass2 = 'position-relative hospital-box';

        }
        else if (this.props.currenDay != 32) {
            hospitalClass2 = 'position-relative hospital-box';

        }
        else {
            hospitalClass2 = 'hospital-visibility';
            hospitalClass = 'hidden';
        }

        return (
            <div className='col-half col-hospital'>
                <div className='head'>Hospital</div>
                <div className='done-col hospital-col'>
                    <div className={hospitalClass2}>
                    {this.props.workers.filter((worker) => worker.location == 'hospital').map(worker => {
                        {/*if(worker.location == 'hospital' && !this.props.actionScreen) {
                            hospitalClass = 'hospital-box';
                        }
                        else {
                            hospitalClass = 'hidden';
                        }                    */}
                    return (<Worker
                            key = {worker.key}
                            workerObj = {worker}
                            src = {worker.src}
                            location = {worker.location}
                            newDay = {this.props.newDay}
                            />);
                    })}
                    </div>
                    <div className={hospitalClass}>
                        <span className='hospital-txt hospital-block upper'>Returns in</span>
                        <span className='hospital-no'>{this.props.sickDays + 1}</span>
                        <span className='hospital-txt hospital-block lower'>{this.props.sickDays >= 1 ? 'days' : 'day'}</span>
                    </div>
                </div>
            </div>
        );
    }
}  
export default Hospital;
