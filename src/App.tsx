import {useState} from "react";

import "./App.css";
import {Button, Col, Input, QRCode} from "antd";

function App() {
  const [url, setUrl] = useState<string>();
  const [color, setColor] = useState<string>();

  function download() {
    if (!url) return;
    const canva = document
      .getElementById("qrcode")
      ?.querySelector<HTMLCanvasElement>("canvas");

    const urlToDownload = canva?.toDataURL();

    const a = document.createElement("a");

    a.href = urlToDownload as string;
    a.download = "qrcode.png";
    a.click();
  }

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h1 style={{fontSize: "40px"}}>Gerador de Qrcode</h1>

          <Input
            placeholder="Insira a url"
            onChange={e => setUrl(e.target.value)}
          ></Input>
          <br />
          <QRCode
            id="qrcode"
            size={300}
            color={color}
            status="active"
            icon="https://www.meleale.com/logo.jpeg"
            iconSize={70}
            value={url as string}
            bgColor="#fff"
          ></QRCode>

          <br />

          <Col hidden={url === undefined}>
            <div>
              <label style={{fontSize: "20px"}} htmlFor="color">
                Ecolha uma cor
              </label>
            </div>
            <Input
              onChange={e => {
                setColor(e.target.value);
              }}
              style={{width: "40px", height: "40px"}}
              name="color"
              type="color"
            ></Input>
          </Col>
          <br />
          <Button style={{width: "100%"}} type="primary" onClick={download}>
            Fazer Download{" "}
          </Button>
        </Col>
      </div>
    </>
  );
}

export default App;
