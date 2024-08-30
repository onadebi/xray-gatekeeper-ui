import { useState, useEffect } from "react"
import { XRayStatsReposne } from "../models/XRayStatsResponse";
import agent from "../api/agent";
import { AppResponse } from "../models/AppResponse";
import './Home.scss'



const Home = () => {

  const [requestStats, setRequestStats] = useState<AppResponse<XRayStatsReposne[]>>();

  useEffect(() => {
    const objResp = agent.xray.getRequestStats({ from: new Date('2024-08-22'), to: new Date('2024-08-30') });
    objResp.then(resp => setRequestStats(resp)).catch(ex => {
      console.error(ex)
    });
  }, [])

  return (
    <>
      <div className="panels">


        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {requestStats?.success ? (
              requestStats.result.length > 0 ? (
                requestStats.result.map((v, i) => (
                  <tr key={i}>
                    <td>{v.status}</td>
                    <td>{v.count}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2}>No records for date range</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan={2}>Error fetching data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home