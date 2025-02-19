const Footer = function () {
  const hour = new Date().getHours();
  const businessHours = {
    openingHour: 8,
    closingHour: 22,
  };

  const isOpen =
    hour >= businessHours.openingHour && hour < businessHours.closingHour;
  return (
    <footer
      style={{ fontSize: 'clamp(1.3rem, 2vw, 1.5rem', marginTop: '4rem' }}
      className="footer text-center"
    >
      {` We're open from ${businessHours.openingHour}AM to ${
        businessHours.closingHour
      }PM
      . ${isOpen ? 'Come on in!' : 'Sorry, we are closed.'}`}
    </footer>
  );
};
export default Footer;
