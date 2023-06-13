import React from 'react'
import dataKursus from '../ClassroomSiswa/Data/DataKursus'
import { Link } from 'react-router-dom'

const SideDashboardJadwalKursusSiswa = () => {
  return (
    <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
              {dataKursus.map((item)=>(
                <div class="card mb-3">           
                  <div class="schedule-course-item">  
                    <i class="las la-calendar-day text-primary"></i>
                    <div>  
                      <span>
                        <Link to={`/classroom/user/${item.kursus}`} class="schedule-course-title" style={{textDecoration: "none", color: "black"}}>
                          {item.kursus}
                        </Link>
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

export default SideDashboardJadwalKursusSiswa