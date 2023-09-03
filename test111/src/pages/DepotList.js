import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import CasinoCard from "./CasinoCard";
import "./DepotList.css";
import { useTranslation } from 'react-i18next';


const DepotList = () => {

    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const casinosData = require(`../donees/casinos_${i18n.language}.json`);


    const [filters, setFilters] = useState({
        Visa: false,
        MasterCard: false,
        Paypal: false,
        Crypto: false,
        Cashlib: false,
        Neteller: false,
        Skrill: false,
        Paysafecard: false,
        Neosurf: false,
    });

    const [radioClasses, setRadioClasses] = useState({
        Visa: "",
        MasterCard: "",
        Paypal: "",
        Crypto: "",
        Cashlib: "",
        Neteller: "",
        Skrill: "",
        Paysafecard: "",
        Neosurf: "",
    });
    

    const [selectedFilter, setSelectedFilter] = useState("");


    const handleFilterChange = (event) => {
        const { id } = event.target;
        setSelectedFilter(id);
    
        // Mettre à jour les classes CSS pour les boutons radio
        const newRadioClasses = {
            Visa: "",
            MasterCard: "",
            Paypal: "",
            Crypto: "",
            Cashlib: "",
            Neteller: "",
            Skrill: "",
            Paysafecard: "",
            Neosurf: "",
        };
        newRadioClasses[id] = "div_checked";
        setRadioClasses(newRadioClasses);
    };
    

    const { search } = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(search);
        const filterVisa = params.get("Visa") === "true";
        const filterMasterCard = params.get("MasterCard") === "true";
        const filterPaypal = params.get("Paypal") === "true";
        const filterCrypto = params.get("Crypto") === "true";
        const filterCashlib = params.get("Cashlib") === "true";
        const filterNeteller = params.get("Neteller") === "true";
        const filterSkrill = params.get("Skrill") === "true";
        const filterPaysafecard = params.get("Paysafecard") === "true";
        const filterNeosurf = params.get("Neosurf") === "true";
        setFilters({
            Visa: filterVisa,
            MasterCard: filterMasterCard,
            Paypal: filterPaypal,
            Crypto: filterCrypto,
            Cashlib: filterCashlib,
            Neteller: filterNeteller,
            Skrill: filterSkrill,
            Paysafecard: filterPaysafecard,
            Neosurf: filterNeosurf,
        });
        setSelectedFilter("");
    }, [search]);

    const filteredCasinos = casinosData.filter((casino) => {
        return (
            (!filters.Visa || casino.Visa === "oui") &&
            (!filters.MasterCard || casino.MasterCard === "oui") &&
            (!filters.Paypal || casino.Paypal === "oui") &&
            (!filters.Crypto || casino.Crypto === "oui") &&
            (!filters.Cashlib || casino.Cashlib === "oui") &&
            (!filters.Neteller || casino.Neteller === "oui") &&
            (!filters.Skrill || casino.Skrill === "oui") &&
            (!filters.Paysafecard || casino.Paysafecard === "oui") &&
            (!filters.Neosurf || casino.Neosurf === "oui")
        );
    });

    const queryParams = new URLSearchParams(filters).toString();
    const link = `/depot?${queryParams}`;


    // document.getElementById("paymentMethod").addEventListener("change", function() {
    //     const containerDiv = this.closest(".checkbox_methode_depot");
    //     if (this.checked) {
    //       containerDiv.classList.add("div_checked");
    //     } else {
    //       containerDiv.classList.remove("div_checked");
    //     }
    //   });
      



    return (
        <div className="page_depot_all">
            <div className="page_depot_bg">
                <div className="page_depot_titre">
                    <h1>
                        Les différentes alternatives de dépôt proposées sur les casinos en
                        ligne
                    </h1>
                </div>
                <div className="page_depot_list">
                    <a href="http://localhost:3000/depot?Visa=true"><div className="checkbox_methode_depot Visa">
                        <input
                            id="Visa"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Visa}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Visa">Visa</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?MasterCard=true"><div className="checkbox_methode_depot MasterCard">
                        <input
                            id="MasterCard"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.MasterCard}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="MasterCard">MasterCard</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Paypal=true"><div className="checkbox_methode_depot Paypal">
                        <input
                            id="Paypal"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Paypal}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Paypal">Paypal</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Crypto=true"><div className="checkbox_methode_depot Crypto">
                        <input
                            id="Crypto"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Crypto}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Crypto">Crypto</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Cashlib=true"><div className="checkbox_methode_depot Cashlib">
                        <input
                            id="Cashlib"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Cashlib}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Cashlib">Cashlib</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Neteller=true"><div className="checkbox_methode_depot Neteller">
                        <input
                            id="Neteller"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Neteller}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Neteller">Neteller</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Skrill=true"><div className="checkbox_methode_depot Skrill">
                        <input
                            id="Skrill"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Skrill}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Skrill">Skrill</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Paysafecard=true"><div className="checkbox_methode_depot Paysafecard">
                        <input
                            id="Paysafecard"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Paysafecard}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Paysafecard">Paysafecard</label> */}
                    </div></a>
                    <a href="http://localhost:3000/depot?Neosurf=true"><div className="checkbox_methode_depot Neosurf">
                        <input
                            id="Neosurf"
                            name="paymentMethod"
                            type="radio"
                            checked={filters.Neosurf}
                            onChange={handleFilterChange}
                        />
                        {/* <label htmlFor="Neosurf">Neosurf</label> */}
                    </div></a>
                </div>
            </div>
            <div className="sous_titre_depot">
                <h3>Top des meilleurs Casinos VISA en 2023</h3>
            </div>
            <div className="description_methode">
                <p>
                    Visa est une entreprise américaine de services financiers qui propose
                    des produits de paiement, principalement des cartes de crédit et de
                    débit. Visa est l'un des principaux réseaux de paiement dans le monde,
                </p>
            </div>
            <div>
                {filteredCasinos.map((casino) => (
                    <div
                        key={casino.id}
                        className="lalistos"
                        id={`casino-${casino.id}`}
                    >
                        <Link to={`/casinos/${casino.id}`}>
                            <CasinoCard casino={casino} />
                        </Link>
                    </div>
                ))}
            </div>
            <Link to={`/depot?${queryParams}`}>Aller à la page de dépôt</Link>
        </div>
    );
};
export default DepotList;