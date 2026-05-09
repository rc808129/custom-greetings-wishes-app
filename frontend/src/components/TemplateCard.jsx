import html2canvas from "html2canvas-pro";
import { useRef, useState } from "react";

import { FaWhatsapp, FaInstagram, FaEnvelope, FaCopy } from "react-icons/fa";
const TemplateCard = ({
  template,

  user,
}) => {
  const cardRef = useRef();
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureImage = async () => {
    try {
      const canvas = await html2canvas(cardRef.current, {
        useCORS: true,
        scale: 2,
        backgroundColor: null, // ya "#000000"
        logging: false,
        allowTaint: true,
      });
      const imageUrl = canvas.toDataURL("image/png", 1.0);
      setCapturedImage(imageUrl);
      return imageUrl;
    } catch (error) {
      console.error("Capture error:", error);
      alert("Image capture mein problem aa rahi hai");
    }
  };

  const handleShare = async () => {
    if (template.isPremium) {
      setShowPremiumPopup(true);

      return;
    }
    const imageUrl = await captureImage();
    if (!imageUrl) return;

    // 1. Try Native Web Share API (Best for Mobile)
    if (navigator.share) {
      try {
        const blob = await (await fetch(imageUrl)).blob();
        const file = new File([blob], "greeting-card.png", {
          type: "image/png",
        });

        await navigator.share({
          title: `${user.userName}'s Birthday Wish`,
          text: `Check out this amazing greeting for ${user.userName}!`,
          files: [file],
        });
        return;
      } catch (err) {
        console.log("Web Share cancelled or failed");
      }
    }

    // 2. Show Custom Share Menu (Fallback)
    setShowShareMenu(true);
  };

  const shareToWhatsApp = () => {
    const text = `Check out this beautiful greeting for ${user.userName}!`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text + "\n" + capturedImage)}`,
      "_blank",
    );
  };

  // Copy Image Link
  const copyImage = () => {
    navigator.clipboard.writeText(capturedImage);
    alert("Image link copied to clipboard!");
    setShowShareMenu(false);
  };

  return (
    <div
      ref={cardRef}
      className="
      relative

      w-full

      h-[500px]

      rounded-[30px]

      overflow-hidden

      shadow-2xl

      group

      cursor-pointer

      transition-all
      duration-300

      hover:scale-105
    "
    >
      {/* TEMPLATE IMAGE */}

      <img
        src={template.image}
        alt="template"
        className="
        w-full
        h-full

        object-cover

        transition-all
        duration-500

        group-hover:scale-105
      "
      />

      {/* DARK OVERLAY */}

      <div
        className="
        absolute
        inset-0

        bg-[rgba(0,0,0,0.1)]
      "
      />

      {/* PROFILE IMAGE */}

      <div
        className="
        absolute

        top-4
        left-4
      "
      >
        <img
          src={user.profilePic}
          alt="profile"
          className="
          w-16
          h-16

          rounded-full

          border-4
          border-white

          object-cover

          shadow-lg
        "
        />
      </div>

      {/* USERNAME */}

      <h1
        className="
        absolute

        top-6
        left-1/2

        -translate-x-1/2

        text-white

        text-2xl
        font-bold

        tracking-wide

        shadow-lg
      "
      >
        {user.userName}
      </h1>

      {template.isPremium && (
        <div
          className="
      absolute
      top-4
      right-4

      bg-yellow-400

      text-black

      px-4
      py-2

      rounded-full

      text-sm
      font-bold

      shadow-lg
    "
        >
          ⭐ Premium
        </div>
      )}
      <button
        onClick={handleShare}
        className="
  absolute
  bottom-4
  right-4

  bg-white
  text-black

  px-5
  py-2

  rounded-xl

  font-bold
  shadow-lg
  cursor-pointer
"
      >
        Share
      </button>

      {showShareMenu && capturedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-80">
            <h3 className="text-xl font-semibold text-center mb-5">
              Share via
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={shareToWhatsApp}
                className="flex flex-col items-center gap-2 p-4 hover:bg-green-50 rounded-xl"
              >
                <FaWhatsapp size={32} className="text-green-500" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  alert("Instagram story sharing needs app integration");
                  // Future: You can add Instagram story deep link if needed
                }}
                className="flex flex-col items-center gap-2 p-4 hover:bg-pink-50 rounded-xl"
              >
                <FaInstagram size={32} className="text-pink-500" />
                <span>Instagram</span>
              </button>

              <button
                onClick={() =>
                  window.open(
                    `mailto:?subject=Birthday Wish&body=${encodeURIComponent(capturedImage)}`,
                    "_blank",
                  )
                }
                className="flex flex-col items-center gap-2 p-4 hover:bg-blue-50 rounded-xl"
              >
                <FaEnvelope size={32} className="text-blue-500" />
                <span>Email</span>
              </button>

              <button
                onClick={copyImage}
                className="flex flex-col items-center gap-2 p-4 hover:bg-gray-100 rounded-xl"
              >
                <FaCopy size={32} className="text-gray-700" />
                <span>Copy Link</span>
              </button>
            </div>

            <button
              onClick={() => setShowShareMenu(false)}
              className="mt-6 w-full py-3 text-red-500 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showPremiumPopup && (
        <div
          onClick={() => setShowPremiumPopup(false)}
          className="
      fixed
      inset-0

      bg-black/60

      flex
      items-center
      justify-center

      z-50
    "
        >
          {/* POPUP BOX */}

          <div
            onClick={(e) => e.stopPropagation()}
            className="
        bg-white

        w-[90%]
        max-w-md

        rounded-3xl

        p-8

        shadow-2xl

        text-center

        animate-[popup_0.3s_ease]
      "
          >
            <h1
              className="
          text-3xl
          font-bold

          text-yellow-500

          mb-4
        "
            >
              ⭐ Premium Template
            </h1>

            <p
              className="
          text-gray-600
          text-lg
          leading-relaxed
        "
            >
              This template is available only for premium users.
            </p>

            <p
              className="
          mt-4

          text-2xl
          font-bold

          text-blue-600
        "
            >
              ₹99 / month
            </p>

            <button
              className="
          mt-6

          w-full

          bg-gradient-to-r
          from-yellow-400
          to-orange-500

          text-white

          py-4

          rounded-2xl

          font-bold
          text-lg

          hover:scale-105

          transition-all
          duration-300
        "
            >
              Upgrade Now
            </button>

            <button
              onClick={() => setShowPremiumPopup(false)}
              className="
          mt-4

          text-gray-500

          font-medium
        "
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
