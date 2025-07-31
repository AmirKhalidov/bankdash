import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../services/hooks";
import { fetchServices } from "../redux/servicesSlice";
import Modal from "../components/Modal";
import styles from "../styles/Services.module.css";
import type { RootState } from "../services/store";

interface ServicesState {
  bankServices: Service[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
interface Service {
  id: string | number;
  icon: string;
  title: string;
  subtitle: string;
  col1: string;
  col1Desc: string;
  col2: string;
  col2Desc: string;
  col3: string;
  col3Desc: string;
  details: string;
  additionalInfo: string;
  offer: string;
  validity: string;
  contact: string;
}

const Services: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    bankServices = [],
    status = "idle",
    error = null,
  } = useAppSelector((state: RootState) => state.services as ServicesState);

  const [selected, setSelected] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchServices());
    }
  }, [dispatch, status]);

  const handleViewDetails = (service: Service): void => {
    setSelected(service);
    setIsModalOpen(true);
  };

  const renderIconBlocks = (): ReactNode => {
    if (bankServices.length === 0) return null;
    return bankServices.slice(0, 3).map((service: Service) => (
      <div key={service.id} className={styles.iconBlock}>
        <div className={styles.iconContent}>
          <div className={styles.iconCircle}>
            <img src={service.icon} alt={service.title} />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.subtitle}>{service.subtitle}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconBlockWrapper}>{renderIconBlocks()}</div>
      <h2>Bank Services List</h2>

      {status === "loading" && <p>Loading services...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && bankServices.length === 0 && (
        <p>No services available</p>
      )}

      {status === "succeeded" &&
        bankServices.map((service: Service) => (
          <div key={service.id} className={styles.card}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.iconBox}>
                <img src={service.icon} alt={service.title} />
              </div>
              <div className={styles.row}>
                <div className={styles.column}>
                  <h4>{service.title}</h4>
                  <span>{service.subtitle}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col1}</h4>
                  <span>{service.col1Desc}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col2}</h4>
                  <span>{service.col2Desc}</span>
                </div>
                <div className={styles.column}>
                  <h4>{service.col3}</h4>
                  <span>{service.col3Desc}</span>
                </div>
              </div>
            </div>
            <button
              className={styles.viewDetailsButton}
              onClick={() => handleViewDetails(service)}
            >
              View Details
            </button>
          </div>
        ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          selected && (
            <>
              <h3>{selected.title}</h3>
              <p>{selected.details}</p>
              <p>
                <b>Additional Info:</b> {selected.additionalInfo}
              </p>
              <p>
                <b>Offer:</b> {selected.offer}
              </p>
              <p>
                <b>Validity:</b> {selected.validity}
              </p>
              <p>
                <b>Contact:</b> {selected.contact}
              </p>
            </>
          )
        }
      />
    </div>
  );
};

export default Services;
