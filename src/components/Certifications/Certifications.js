import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <div className={classes.container}>
      <div className={classes.timeline}>
        <div className={classes["timeline-month"]}>
          August, 2018
          <span>3 Entries</span>
        </div>
        <div className={classes["timeline-section"]}>
          <div className={classes["timeline-date"]}>21, Tuesday</div>
          <div className={classes.row}>
            <div className={classes["col-sm-4"]}>
              <div className={classes["timeline-box"]}>
                <div className={classes["box-title"]}>
                  <i
                    className={`${classes.fa} ${classes["fa-asterisk"]} ${classes["text-success"]}`}
                    aria-hidden="true"
                  ></i>{" "}
                  Job Created
                </div>
                <div className={classes["box-content"]}>
                  <a className="btn btn-xs btn-default pull-right">Details</a>
                  <div className={classes["box-item"]}>
                    <strong>Loss Type</strong>: A/C Leak
                  </div>
                  <div className={classes["box-item"]}>
                    <strong>Loss Territory</strong>: Texas
                  </div>
                  <div className={classes["box-item"]}>
                    <strong>Start Date</strong>: 08/22/2018
                  </div>
                </div>
                <div className={classes["box-footer"]}>- Tyler</div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className={classes["timeline-box"]}>
                <div className={classes["box-title"]}>
                  <i className="fa fa-pencil text-info" aria-hidden="true"></i>{" "}
                  Job Edited
                </div>
                <div className={classes["box-content"]}>
                  <a className="btn btn-xs btn-default pull-right">Details</a>
                  <div className={classes["box-item"]}>
                    <strong>Project Manager</strong>: Marlyn
                  </div>
                  <div className={classes["box-item"]}>
                    <strong>Supervisor</strong>: Carol
                  </div>
                </div>
                <div className={classes["box-footer"]}>- Tyler</div>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-section">
          <div class="timeline-date">22, Wednesday</div>
          <div class="row">
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i class="fa fa-pencil text-info" aria-hidden="true"></i> Job
                  Edited
                </div>
                <div class="box-content">
                  <a class="btn btn-xs btn-default pull-right">Details</a>
                  <div class="box-item">
                    <strong>Extraction Type</strong>: Carpet Heavy
                  </div>
                  <div class="box-item">
                    <strong>Water Category</strong>: 4
                  </div>
                  <div class="box-item">
                    <strong>No. Of Tech</strong>: 6
                  </div>
                  <div class="box-item">
                    <strong>Est. Complation</strong>: 09/01/2018
                  </div>
                </div>
                <div class="box-footer">- Carol</div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i class="fa fa-tasks text-primary" aria-hidden="true"></i>{" "}
                  New Job To Do
                </div>
                <div class="box-content">
                  <a class="btn btn-xs btn-default pull-right">Details</a>
                  <div class="box-item">
                    <strong>Employee</strong>: Sam
                  </div>
                  <div class="box-item">
                    <strong>To Do</strong>: Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nullam nisi nulla, viverra quis
                    felis sit amet, lacinia feugiat odio. Aliquam sed orci
                    elementum, volutpat dolor eget, venenatis nunc
                  </div>
                </div>
                <div class="box-footer">- Marlyn</div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i class="fa fa-tasks text-primary" aria-hidden="true"></i>{" "}
                  New Job To Do
                </div>
                <div class="box-content">
                  <a class="btn btn-xs btn-default pull-right">Details</a>
                  <div class="box-item">
                    <strong>Employee</strong>: Jones
                  </div>
                  <div class="box-item">
                    <strong>To Do</strong>: Proin sit amet aliquet neque, eget
                    sagittis nunc. Proin convallis lectus quis volutpat
                    pharetra. Donec quis ultrices eros. Ut eget mi faucibus.
                  </div>
                </div>
                <div class="box-footer">- Marlyn</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i
                    class="fa fa-thermometer-half text-warning"
                    aria-hidden="true"
                  ></i>{" "}
                  Pschrometrics
                </div>
                <div class="box-content">
                  <div class="box-item">
                    <strong>Temp.</strong>: 23 <sup>o</sup>C
                  </div>
                  <div class="box-item">
                    <strong>Rh </strong>: 42
                  </div>
                  <div class="box-item">
                    <strong>Comments</strong>: Integer nec placerat ipsum.
                    Aliquam id ligula suscipit, ornare dui nec, laoreet tortor.
                  </div>
                </div>
                <div class="box-footer">- Jones</div>
              </div>
            </div>

            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i
                    class="fa fa-building-o text-default"
                    aria-hidden="true"
                  ></i>{" "}
                  Room Created
                </div>
                <div class="box-content">
                  <div class="box-item">
                    <strong>Name</strong>: Kitchen
                  </div>
                  <div class="box-item">
                    <strong>Floor Level </strong>: 2
                  </div>
                  <div class="box-item">
                    <strong>Dimensions</strong>: 26 x 11 x 8
                  </div>
                </div>
                <div class="box-footer">- Sam</div>
              </div>
            </div>
          </div>
        </div>

        <div class="timeline-section">
          <div class="timeline-date">23, Thursday</div>
          <div class="row">
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i class="fa fa-tasks text-success" aria-hidden="true"></i>{" "}
                  Job To Do Completed
                </div>
                <div class="box-content">
                  <a class="btn btn-xs btn-default pull-right">Details</a>
                  <div class="box-item">
                    <strong>Employee</strong>: Sam
                  </div>
                  <div class="box-item">
                    <strong>Employee Response</strong>: Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Nullam nisi nulla,
                    viverra quis felis sit amet, lacinia feugiat odio. Aliquam
                    sed orci elementum, volutpat dolor eget, venenatis nunc
                  </div>
                </div>
                <div class="box-footer">- Carol</div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="timeline-box">
                <div class="box-title">
                  <i class="fa fa-cogs text-info" aria-hidden="true"></i>{" "}
                  Equipment Entry
                </div>
                <div class="box-content">
                  <a class="btn btn-xs btn-default pull-right">Details</a>
                  <div class="box-item">
                    <strong>ID</strong>: TW-3232
                  </div>
                  <div class="box-item">
                    <strong>Name</strong>: HEPA 600
                  </div>
                  <div class="box-item">
                    <strong>Date In</strong>: 08/22/2018
                  </div>
                </div>
                <div class="box-footer">- Jones</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certifications;
