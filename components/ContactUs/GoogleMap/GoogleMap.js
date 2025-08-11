const GoogleMap = () => {
  return (
    <section id='googleMap'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d456.488665258187!2d90.38682898462426!3d23.750612788692372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bb2b0758f9%3A0xe21afdf459453ff!2sPeopleNTech%20Institute%20of%20IT%20-%20training%20%26%20Job%20Placement%20Service!5e0!3m2!1sen!2sbd!4v1704265559715!5m2!1sen!2sbd'
        width='100%'
        height='400'
        style={{ border: 0 }}
        title='Office-location'
        tabIndex='0'
        aria-hidden='hidden'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        spellCheck='false'
        aria-label='To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings'
      ></iframe>
    </section>
  );
};

export default GoogleMap;
