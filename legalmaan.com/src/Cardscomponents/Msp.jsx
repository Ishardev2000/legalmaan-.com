import React from "react";

function GoogleMap() {
  return (
    <div className="flex px-10 justify-center items-center">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.933298806363!2d72.34661487488177!3d34.25024560725067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38deeb0982a8454f%3A0x95e3a84898b4177!2sDigital%20Topspot!5e0!3m2!1sen!2s!4v1713960830798!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" "
      ></iframe>
    </div>
  );
}

export default GoogleMap;
