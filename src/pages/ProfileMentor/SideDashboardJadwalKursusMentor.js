import React from 'react'
import dataKursus from '../ClassroomSiswa/Data/DataKursus'

const SideDashboardJadwalKursusMentor = () => {
  return (
    <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
              {dataKursus.map((item)=>(
                <div class="card mb-3">           
                  <div class="schedule-course-item">  
                    <i class="las la-calendar-day text-primary"></i>
                    <div>  
                      <span>
                        <a href="/mentor/classroom" class="schedule-course-title">
                          {item.kursus}
                        </a>
                        <br />
                        <span class="small">{item.kursusStart}</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>{item.timeStart} - {item.timeEnd}</span>
                      </span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
  )
}

export default SideDashboardJadwalKursusMentor