import './LabValuesInfo.css'
function LabValuesInfo({ closeBtn, handleModal }) {

    return (
        <>
            <section className='detail-modal lab-values-modal labvalues'>
                <div className='close-btn-container'>
                    <img src={closeBtn} alt='close' onClick={handleModal} />
                </div>
                <div className="title-wrapper">
                    <h2 className="title">Lab Values</h2>
                </div>
                <div className='modal-content-lab-values labcontent'>
                    <div className="lab-box">
                        <p>Values vary according to individual labs. All values below are for adults.</p>
                    </div>
                    <div className="lab-content">
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Full Blood Count</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Haemoglobin</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 130-180 g/L (13.0-18.0 g/dl)</p>
                                    <p><b>Female</b>: 115-160 g/L (11.5-16.0 g/dl)</p>
                                    <p><i><colorcyan>g/dl for haemoglobin is not used anymore in the UK. We have shifted to use g/L.</colorcyan></i>
                                    </p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Mean cell volume (MCV)</p>
                                </div>
                                <div className="list-desc">
                                    <p>80-100 fL</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Mean cell haemoglobin concentration (MCHC)</p>
                                </div>
                                <div className="list-desc">
                                    <p>30-36 g/dL</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Packed red cell volume (PCV) or haematocrit</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 0.4-0.54 L/L</p>
                                    <p><b>Female</b>:0.37-0.47 L/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Red cell count</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 4.5–6.5 x 10¹²/L</p>
                                    <p><b>Female</b>: 3.9–5.6 x 10¹²/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Platelets</p>
                                </div>
                                <div className="list-desc">
                                    <p>150-400 x 10⁹/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total white cell count (WCC)</p>
                                </div>
                                <div className="list-desc">
                                    <p>4-11 x 10⁹/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>(WCC) Neutrophils</p>
                                </div>
                                <div className="list-desc">
                                    <p>40-75% (2-7.5 x 10⁹/L)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>(WCC) Lymphocytes</p>
                                </div>
                                <div className="list-desc">
                                    <p>20-45% (1.3-3.5 x 10⁹/L)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>(WCC) Eosinophils</p>
                                </div>
                                <div className="list-desc">
                                    <p>1-6% (0.04-0.44 x 10⁹/L)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>(WCC) Basophils</p>
                                </div>
                                <div className="list-desc">
                                    <p>0-1% (0.0-0.10 x 10⁹/L)</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Urea and electrolytes</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Sodium</p>
                                </div>
                                <div className="list-desc">
                                    <p>135-145 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Potassium</p>
                                </div>
                                <div className="list-desc">
                                    <p>3.5-5.0 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Urea</p>
                                </div>
                                <div className="list-desc">
                                    <p>2.0-7 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Creatinine</p>
                                </div>
                                <div className="list-desc">
                                    <p>70-150 μmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Bicarbonate</p>
                                </div>
                                <div className="list-desc">
                                    <p>22-26 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Chloride</p>
                                </div>
                                <div className="list-desc">
                                    <p>95-105 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>eGFR</p>
                                </div>
                                <div className="list-desc">
                                    <p>&gt;90 mL/min</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Liver function tests</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Bilirubin</p>
                                </div>
                                <div className="list-desc">
                                    <p>3-17 μmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Alanine transferase (ALT)</p>
                                </div>
                                <div className="list-desc">
                                    <p>5-35 U/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Aspartate transaminase (AST)</p>
                                </div>
                                <div className="list-desc">
                                    <p>5-35 U/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Alkaline phosphatase (ALP)</p>
                                </div>
                                <div className="list-desc">
                                    <p>30-150 U/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Gamma glutamyl transferase (yGT)</p>
                                </div>
                                <div className="list-desc">
                                    <p>8-60 u/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Albumin</p>
                                </div>
                                <div className="list-desc">
                                    <p>35-50 g/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total protein</p>
                                </div>
                                <div className="list-desc">
                                    <p>60-80 g/L</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Other haematology</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Erythrocyte sedimentation rate (ESR)</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; age/2 mm/hour</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Prothrombin time (PT)</p>
                                </div>
                                <div className="list-desc">
                                    <p>10-14 secs</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Activated partial thromboplastin time (APTT)</p>
                                </div>
                                <div className="list-desc">
                                    <p>35-45 secs</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Bleeding time</p>
                                </div>
                                <div className="list-desc">
                                    <p>3-9 minutes</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Fibrinogen</p>
                                </div>
                                <div className="list-desc">
                                    <p>2.0-4.0 g/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Ferritin</p>
                                </div>
                                <div className="list-desc">
                                    <p>20-300 ng/ml</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Vitamin B12</p>
                                </div>
                                <div className="list-desc">
                                    <p>160-800ng/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Folate</p>
                                </div>
                                <div className="list-desc">
                                    <p>&gt;2.7 ng/ml mcg/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Vitamin D</p>
                                </div>
                                <div className="list-desc">
                                    <p>60-105 nmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Reticulocytes</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.8–2.0% (25-100 x 10⁹/L)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>D-Dimer</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 500 ng/mL</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>International normalized ratio (INR)</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.8-1.2</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Other biochemistry and hormones</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Calcium (Total)</p>
                                </div>
                                <div className="list-desc">
                                    <p>2.1-2.6 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Phosphate</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.8-1.4 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Magnesium</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.75-1.05 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>CRP</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 10 mg/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Thyroid stimulating hormone (TSH)</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.5-5.7 mU/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Free thyroxine (T4)</p>
                                </div>
                                <div className="list-desc">
                                    <p>9-18 pmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total thyroxine (T4)</p>
                                </div>
                                <div className="list-desc">
                                    <p>70-140 nmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Free triiodothyronine (T3)</p>
                                </div>
                                <div className="list-desc">
                                    <p>3.5-6.5 pmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total triiodothyronine (T3)</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.9-2.8 nmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Thyroxine-binding globulin (TBG)</p>
                                </div>
                                <div className="list-desc">
                                    <p>7-17 mg/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Serum iron</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 14-33 μmol/L</p>
                                    <p><b>Female</b>: 11-28 μmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Serum transferrin</p>
                                </div>
                                <div className="list-desc">
                                    <p>1.7-3.4 g/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Transferrin saturation index</p>
                                </div>
                                <div className="list-desc">
                                    <p>16-55%</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total iron-binding capacity</p>
                                </div>
                                <div className="list-desc">
                                    <p>54-75 μmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Parathyroid hormone (PTH)</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 0.8-8.5 pmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Amylase</p>
                                </div>
                                <div className="list-desc">
                                    <p>0-140 U/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Lipase</p>
                                </div>
                                <div className="list-desc">
                                    <p>13-60 IU/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Uric acid (Urate)</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 210-480 μmol/L (3.5-8 mg/dL)</p>
                                    <p><b>Female</b>: 150-390 μmol/L (2.5-6.5 mg/dL)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Prostate-specific antigen (PSA)</p>
                                </div>
                                <div className="list-desc">
                                    <p>0-4 ng/mL</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>17 hydroxyprogesterone (female)</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.2-1 mg/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Adrenocorticotropic hormone (ACTH)</p>
                                </div>
                                <div className="list-desc">
                                    <p>4.5-20 pmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Follicle-stimulating hormone (FSH)</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 1-10 U/L</p>
                                    <p><b>Female</b>:</p>
                                    <p>Luteal: 2-8 IU/L</p>
                                    <p>Ovulation: 5-25 IU/L</p>
                                    <p>Postmenopause: &gt;25 IU/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Luteinizing Hormone (LH)</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>:</p>
                                    <p>Prepubertal: 0.15 IU/L</p>
                                    <p>Adult: 0.5-9 IU/L</p>
                                    <p><b>Female</b>:</p>
                                    <p>Luteal: 3-16 IU/L</p>
                                    <p>Ovulation: 16-84 IU/L</p>
                                    <p>Postmenopause: 17-75 IU/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Oestradiol</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: 50-200 pmol/L</p>
                                    <p><b>Female</b>:</p>
                                    <p>&lt;130 pmol/L (postmenopause)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Growth hormone</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 20 mu/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Progesterone</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Female</b> (ovulation):</p>
                                    <p>70-280 ng/dL</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Prolactin</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Female</b>:</p>
                                    <p>&lt;440 mU/L</p>
                                    <p>(&lt;25 ng/mL)</p>
                                    <p><b>Male</b>:</p>
                                    <p>&lt;350 mU/L</p>
                                    <p>(&lt;20 ng/mL)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Testosterone</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>: </p>
                                    <p>10-25 nmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Glucose (fasting)</p>
                                </div>
                                <div className="list-desc">
                                    <p>3.5-5.5 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>HbA1c</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt;48 mmol/mol, &lt;6.5%</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Cortisol (Blood)</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Morning</b>:</p>
                                    <p>450-700 nmol/L</p>
                                    <p><b>Midnight</b>:</p>
                                    <p>80-280 nmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Lactate</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Venous</b>:</p>
                                    <p>0.6-2.4 mmol/L</p>
                                    <p><b>Arterial</b>:</p>
                                    <p>0.6-1.8 mmol/L</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Arterial blood gases</b>
                                </p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>pH</p>
                                </div>
                                <div className="list-desc">
                                    <p>7.35-7.45</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>pCO2</p>
                                </div>
                                <div className="list-desc">
                                    <p>4.7-6.0 kPa (35-45 mmHg)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>pO2</p>
                                </div>
                                <div className="list-desc">
                                    <p>10-14 kPa (75-100 mmHg)</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Base excess</p>
                                </div>
                                <div className="list-desc">
                                    <p>± 2 mmol/L</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Lipids</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Total cholesterol</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 5 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Triglycerides</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.55-1.90 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>HDL cholesterol</p>
                                </div>
                                <div className="list-desc">
                                    <p>0.9-1.93 mmol/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>LDL cholesterol</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 2 mmol/L</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Cardiac enzymes</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Troponin T</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt;12 ng/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Creatine kinase</p>
                                </div>
                                <div className="list-desc">
                                    <p><b>Male</b>:</p>
                                    <p>25-195 U/L</p>
                                    <p><b>Female</b>:</p>
                                    <p>5-170 U/L</p>
                                </div>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Lactate dehydrogenase (LDH)</p>
                                </div>
                                <div className="list-desc">
                                    <p>70-250 U/L</p>
                                </div>
                            </div>
                        </div>
                        <div className="lab-item">
                            <div className="lab-title">
                                <p><b>Urine reference intervals</b></p>
                            </div>
                            <div className="lab-list">
                                <div className="list-name">
                                    <p>Cortisol (free)</p>
                                </div>
                                <div className="list-desc">
                                    <p>&lt; 280 nmol/24h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lab-box bottom"><p><strong>Reference:</strong></p>
                        <p>Oxford Handbook of Clinical Medicine 10th Edition page 752</p>
                        <p>Oxford Handbook of Haematology 3rd Edition page 808</p>
                        <p>Oxford Handbook of Endocrinology and Diabetes 3rd Edition page 879</p></div>
                </div>
            </section>
        </>
    )
}

export default LabValuesInfo;