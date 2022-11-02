import React from "react";
import { ModalContentView, ModalView, ModalViewBox } from "./style";

import CloseSvg from "assets/images/comon/close.svg";

interface Props {
  propsClassName?: string;
  children?: React.ReactNode;
  width?: string | number;
  visible: boolean;
  onClose: Function;
  title?: any;
  showHeader?: boolean;
  padding?: string;
  paddingBox?: string;
}
export default function Modal({
  propsClassName = "",
  children,
  width = "500px",
  visible,
  onClose,
  title,
  showHeader = true,
  padding = "0 20px",
  paddingBox = "0 0 24px 0",
}: Props) {

  if (!visible) {
    return null;
  }
  return (
    <ModalView className={propsClassName}>
      <ModalViewBox
        className="modal-view-box"
        width={width}
        paddingBox={paddingBox}
      >
        {showHeader && (
          <div className="modal-header">
            <h1>{typeof title === "function" ? title() : title}</h1>
            <span onClick={() => onClose()}>
              <img
                src={CloseSvg}
                alt=""
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
              />
            </span>
          </div>
        )}
        <ModalContentView padding={padding}>{children}</ModalContentView>
      </ModalViewBox>
    </ModalView>
  );
}
