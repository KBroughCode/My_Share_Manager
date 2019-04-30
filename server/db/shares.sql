DROP TABLE Users_Shares;
DROP TABLE Shares;
DROP TABLE Users;


CREATE TABLE Users(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255),
  age INTEGER,
  user_ID INTEGER,
  img_url VARCHAR (100)
);

CREATE TABLE Shares(
id SERIAL PRIMARY KEY,
name VARCHAR(255),
symbol VARCHAR(8)
);

CREATE TABLE Users_Shares(
id SERIAL PRIMARY KEY,
user_id int REFERENCES Users(id),
share_id INT REFERENCES Shares(id),
quantity INT
);


INSERT INTO Users(name,age,user_ID,img_url) VALUES ('Bill Decker', 48, 24681012,'Bill_Decker.png');
INSERT INTO Users(name,age,user_ID,img_url) VALUES ('Anne Decker', 46, 24681013,'Anne_Decker.png');
INSERT INTO Users(name,age,user_ID,img_url) VALUES ('John Decker', 12, 24681015,'John_Decker.png');


INSERT INTO Shares(name, symbol) VALUES('3i','III');
INSERT INTO Shares(name, symbol) VALUES('Admiral Group','ADM');
INSERT INTO Shares(name, symbol) VALUES('Anglo American plc', 'AAL');
INSERT INTO Shares(name, symbol) VALUES('Antofagasta', 'ANTO');
INSERT INTO Shares(name, symbol) VALUES('Ashtead Group', 'AHT');
INSERT INTO Shares(name, symbol) VALUES('Associated British Foods', 'ABF');
INSERT INTO Shares(name, symbol) VALUES('AstraZeneca', 'AZN');
INSERT INTO Shares(name, symbol) VALUES('Auto Trader Group', 'AUTO');
INSERT INTO Shares(name, symbol) VALUES('Aviva', 'AV');
INSERT INTO Shares(name, symbol) VALUES('BAE Systems', 'BA');
INSERT INTO Shares(name, symbol) VALUES('Barclays','BARC');
INSERT INTO Shares(name, symbol) VALUES('Barratt Developments',	'BDEV');
INSERT INTO Shares(name, symbol) VALUES('Berkeley Group Holdings',	'BKG');
INSERT INTO Shares(name, symbol) VALUES('BHP', 'BHP');
INSERT INTO Shares(name, symbol) VALUES('BP',	'BP');
INSERT INTO Shares(name, symbol) VALUES('British American Tobacco', 'BATS');
INSERT INTO Shares(name, symbol) VALUES('British Land', 'BLND');
INSERT INTO Shares(name, symbol) VALUES('BT Group',	'BT-A');
INSERT INTO Shares(name, symbol) VALUES('Bunzl', 'BNZL');
INSERT INTO Shares(name, symbol) VALUES('Burberry', 'BRBY');
INSERT INTO Shares(name, symbol) VALUES('Carnival Corporation & plc', 'CCL');
INSERT INTO Shares(name, symbol) VALUES('Centrica', 'CNA');
INSERT INTO Shares(name, symbol) VALUES('Coca-Cola HBC','CCH');
INSERT INTO Shares(name, symbol) VALUES('Compass Group', 'CPG');
INSERT INTO Shares(name, symbol) VALUES('CRH plc', 'CRH');
INSERT INTO Shares(name, symbol) VALUES('Croda International', 'CRDA');
INSERT INTO Shares(name, symbol) VALUES('DCC plc', 'DCC');
INSERT INTO Shares(name, symbol) VALUES('Diageo', 	'DGE');
INSERT INTO Shares(name, symbol) VALUES('Direct Line Group', 'DLG');
INSERT INTO Shares(name, symbol) VALUES('easyJet', 'EZJ');
INSERT INTO Shares(name, symbol) VALUES('Evraz',	'EVR');
INSERT INTO Shares(name, symbol) VALUES('Experian', 'EXPN');
INSERT INTO Shares(name, symbol) VALUES('Ferguson plc', 'FERG');
INSERT INTO Shares(name, symbol) VALUES('Fresnillo plc', 'FRES');
INSERT INTO Shares(name, symbol) VALUES('GlaxoSmithKline', 'GSK');
INSERT INTO Shares(name, symbol) VALUES('Glencore', 	'GLEN');
INSERT INTO Shares(name, symbol) VALUES('Halma', 'HLMA');
INSERT INTO Shares(name, symbol) VALUES('Hargreaves Lansdown', 'HL');
INSERT INTO Shares(name, symbol) VALUES('Hikma Pharmaceuticals',	'HIK');
INSERT INTO Shares(name, symbol) VALUES('Hiscox', 	'HSX');
INSERT INTO Shares(name, symbol) VALUES('HSBC', 'HSBA');
INSERT INTO Shares(name, symbol) VALUES('Imperial Brands','IMB');
INSERT INTO Shares(name, symbol) VALUES('Informa', 'INF');
INSERT INTO Shares(name, symbol) VALUES('InterContinental Hotels Group','IHG');
INSERT INTO Shares(name, symbol) VALUES('International Airlines Group','IAG');
INSERT INTO Shares(name, symbol) VALUES('Intertek', 'ITRK');
INSERT INTO Shares(name, symbol) VALUES('ITV plc',	'ITV');
INSERT INTO Shares(name, symbol) VALUES('Johnson Matthey', 'JMAT');
INSERT INTO Shares(name, symbol) VALUES('Just Eat','JE');
INSERT INTO Shares(name, symbol) VALUES('Kingfisher plc','KGF');
INSERT INTO Shares(name, symbol) VALUES('Land Securities',	'LAND');
INSERT INTO Shares(name, symbol) VALUES('Legal & General', 'LGEN');
INSERT INTO Shares(name, symbol) VALUES('Lloyds Banking Group','LLOY');
INSERT INTO Shares(name, symbol) VALUES('London Stock Exchange Group','LSE');
INSERT INTO Shares(name, symbol) VALUES('Marks & Spencer', 'MKS');
INSERT INTO Shares(name, symbol) VALUES('Melrose Industries', 'MRO');
INSERT INTO Shares(name, symbol) VALUES('Micro Focus', 'MCRO');
INSERT INTO Shares(name, symbol) VALUES('Mondi', 'MNDI');
INSERT INTO Shares(name, symbol) VALUES('Morrisons', 'MRW');
INSERT INTO Shares(name, symbol) VALUES('National Grid plc', 'NG');
INSERT INTO Shares(name, symbol) VALUES('Next plc','NXT');
INSERT INTO Shares(name, symbol) VALUES('NMC Health',	'NMC');
INSERT INTO Shares(name, symbol) VALUES('Ocado',	'OCDO');
INSERT INTO Shares(name, symbol) VALUES('Paddy Power Betfair','PPB');
INSERT INTO Shares(name, symbol) VALUES('Pearson plc','PSON');
INSERT INTO Shares(name, symbol) VALUES('Persimmon plc','PSN');
INSERT INTO Shares(name, symbol) VALUES('Phoenix Group','PHNX');
INSERT INTO Shares(name, symbol) VALUES('Prudential plc',	'PRU');
INSERT INTO Shares(name, symbol) VALUES('Reckitt Benckiser','RB');
INSERT INTO Shares(name, symbol) VALUES('RELX',	'REL');
INSERT INTO Shares(name, symbol) VALUES('Rentokil Initial',	'RTO');
INSERT INTO Shares(name, symbol) VALUES('Rio Tinto Group',	'RIO');
INSERT INTO Shares(name, symbol) VALUES('Rightmove','RMV');
INSERT INTO Shares(name, symbol) VALUES('Rolls-Royce Holdings','RR');
INSERT INTO Shares(name, symbol) VALUES('Royal Bank of Scotland Group',	'RBS');
INSERT INTO Shares(name, symbol) VALUES('Royal Dutch Shell',	'RDSA');
INSERT INTO Shares(name, symbol) VALUES('RSA Insurance Group',	'RSA');
INSERT INTO Shares(name, symbol) VALUES('Sage Group','SGE');
INSERT INTO Shares(name, symbol) VALUES('Sainsburys','SBRY');
INSERT INTO Shares(name, symbol) VALUES('Schroders','SDR');
INSERT INTO Shares(name, symbol) VALUES('Scottish Mortgage Investment Trust',	'SMT');
INSERT INTO Shares(name, symbol) VALUES('Segro',	'SGRO');
INSERT INTO Shares(name, symbol) VALUES('Severn Trent',	'SVT');
INSERT INTO Shares(name, symbol) VALUES('Smith & Nephew','SN');
INSERT INTO Shares(name, symbol) VALUES('Smith, D.S.','SMDS');
INSERT INTO Shares(name, symbol) VALUES('Smiths Group',	'SMIN');
INSERT INTO Shares(name, symbol) VALUES('Smurfit Kappa',	'SKG');
INSERT INTO Shares(name, symbol) VALUES('Spirax-Sarco Engineering',	'SPX');
INSERT INTO Shares(name, symbol) VALUES('SSE plc',	'SSE');
INSERT INTO Shares(name, symbol) VALUES('Standard Chartered','STAN');
INSERT INTO Shares(name, symbol) VALUES('Standard Life Aberdeen',	'SLA');
INSERT INTO Shares(name, symbol) VALUES('St. Jamess Place plc',	'STJ');
INSERT INTO Shares(name, symbol) VALUES('Taylor Wimpey','TW');
INSERT INTO Shares(name, symbol) VALUES('Tesco','TSCO');
INSERT INTO Shares(name, symbol) VALUES('TUI Group',	'TUI');
INSERT INTO Shares(name, symbol) VALUES('Unilever',	'ULVR');
INSERT INTO Shares(name, symbol) VALUES('United Utilities',	'UU');
INSERT INTO Shares(name, symbol) VALUES('Vodafone Group','VOD');
INSERT INTO Shares(name, symbol) VALUES('Whitbread','WTB');
INSERT INTO Shares(name, symbol) VALUES('WPP plc','WPP');


INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(1,94, 540);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(1,80, 429);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(1,10, 670);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(1,49, 347);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(2,94,100);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(2,49, 70);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(3,94,100);
INSERT INTO Users_Shares(user_id,share_id,quantity) VALUES(3,80, 68);
