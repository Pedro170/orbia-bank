import React from "react"

const style: React.CSSProperties = {
  width: "50px",
  height: "50px",
  border: "solid 8px var(--color-02)",
  borderRightColor: "transparent",
  borderRadius: "50%",
  animation: "spin 1s infinite",
}

const styleLoading: React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  background: "#000000cf",
  fontSize: "2.5rem",
  color:' #fff',
}

const Loading = () => {
  return (
    <div className="flex-center" style={styleLoading}>
      <div style={style}>
        <style>
          {`
          
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default Loading