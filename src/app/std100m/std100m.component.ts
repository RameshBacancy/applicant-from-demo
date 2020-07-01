import { Component, OnInit } from '@angular/core';
// import { CellClickEvent } from '@progress/kendo-angular-grid';
// import { DialogRef } from '@progress/kendo-angular-dialog';
// import { IlmsCache } from '../ilms-cache.service';
// import { IlmsInterfaceService } from '../Ilms-Interface.service';

export class std100mHeaderDef {
  NewHouseNumber: string;
  NewFraction: string;
  NewPreDirection: string;
  NewStreetName: string;
  NewStreetType: string;
  NewPostDirectional: string;
  NewScndIdentifier: string;
  NewSecondaryRange: string;
  NewZip15: string;
  NewZip69: string;
  NewSitusCity: string;
  NewSitusState: string;
  NewSitusType: string;
  NewSitusNameType: string;
  NewNameLast: string;
  NewNameFirst: string;
  NewNameMiddle: string;
  NewAssessor13: string;
  NewAssessor46: string;
  NewAssessor79: string;
  NewAssessor1012: string;
  NewAssessor1316: string;
  NewAssessorDupF: string;
  NewOffice: string;
  NewCensusTract: string;
  NewRecdWaiveDate: string;
  NewRecordedWaived: string;
  NewSqFootAcre: string;
  NewLotSize: string;
  NewDepth: string;
  NewFrontage: string;
  NewFrontSet: string;
  New1stSideSet: string;
  New2ndSideSet: string;
  NewRearSet: string;
  NewBldgCnt: string;
  NewDwlgCnt: string;
  RecordedDate: string;
  RecordedBy: string;
  RecordedTime: string;
  NoOfStories: string;
  Ownership: string;
  ModuleEntry: string;
  CouncilDistNumber: string;
  Coordinate1: string;
  Coordinate2: string;
  Subdivision: string;
  CanCreateProj: string;
  LegalDescEntry: string;
  KeyMapNmbr: string;
  MapNo: string;
  BlockNo: string;
  LotNo: string;
  InspectionZone: string;
  OpenSpaceZone: string;
  OccupantLoad: string;
  OccupantType: string;
  County: string;
  RestrictArea1: string;
  RestrictArea2: string;
  RestrictArea3: string;
  DeedRestriction: string;
  FccCode: string;
  FpuCode: string;
  Filter1: string;
  Filter2: string;
  Filter3: string;
  Filter4: string;
  Filter5: string;
  Filter6: string;
  HoldData: string;
  Certified: string;
  HpoAllowed: string;
  HpoAllowedBy: string;
  HpoAllowedDate: string;
  HpoAllowedTime: string;
  HpoApplnNo: string;
  HpoApplnDate: string;
  BldgName: string;
  PrivateStreet: string;
  CityLimits: string;
  GisOverride: string;
  RecordType: string;
  RecordCount: string;
}

export class AddressDef {
  StreetNo: string;
  StreetFraction: string;
  StreetPreDirect: string;
  StreetName: string;
  StreetType: string;
  StreetPostDir: string;
  StreetSecId: string;
  StreetSecRng: string;
  StreetZipCode: string;
  StreetZipPlus: string;
}

// property addres class
export class IlmsCacheIn {
  SitusHouseNo: string;
  SitusNoFrs: Array<{ text: string, value: number }>;
  SitusFraction: string;
  SitusPreDirs: Array<{ text: string, value: number }>;
  SitusPreDirection: string;
  SitusStreetName: string;
  SitusStreetType: string;
  SitusSecIds: Array<{ text: string, value: number }>;
  SitusSecIdentifer: string;
  SitusSecRange: string;
  SitusZipCode: string;
  SitusZipPlus: string;
}


@Component({
  selector: 'app-std100m',
  templateUrl: './std100m.component.html',
  styleUrls: ['./std100m.component.scss']
})

export class Std100MComponent implements OnInit {

  InitialLoadComplete: string;

  // Dummy_DB_Situs: string;
  // WorkName: string;
  // X: string;

  labels: any = {
    propertyAddress: {
      title: 'Property Address',
      houseNumber: 'No.',
      fraction: 'Fraction',
      direction: 'Dir.',
      streetName: 'StreetName',
      streetType: 'StreetType',
      directional: 'Directional',
      unitID: 'Unit Id',
      unitNo: 'Unit#',
      zipCode: 'Zip Code',
      zipPlus: 'Zip Plus',
      buildingName: 'Building Name',
      cbPrivateStreet: 'Private Street',
      cdOutsideCity: 'Outside City Limits'
    },
    oGISWarning: 'Override GIS Warning',
    dataAccuracy: 'Data Accuracy has been Certified',
    btnSubmitUpdate: 'Update',
    lastFirstMidddle: {
      title: 'Last/First/Midddle',
      individual: 'Individual',
      corporationFirm: 'Corporation or Firm',
      occupantName: 'Occupant Name',
      lastName: 'Last Name',
      middleName: 'Middle Name',
      firstName: 'First Name',
      otherNames: 'Other Names'
    },
    taxAssessorParcelNo: 'Tax Assessor Parcel #',
    country: 'Country',
    subDivisionName: 'Subdivition Name',
    btnToggleDisplay: 'Toggle Display',
    occupancyCode: {
      title: 'Occupancy Code -- Material Type/Group/Fire Rating',
      occLoad: 'Occ. Load',
      filters: 'Filters'
    },
    generalInfo: {
      title: 'General Information',
      buildings: ' No. of Buildings',
      office: 'Office',
      dwellings: 'No. of Dwellings',
      moduleEntry: 'Module Entry',
      stories: 'No. of Stories',
      councilDist: 'Council District',
      ownership: 'Ownership'
    },
    fccFpuCode: {
      title: 'FCC Code / FPU Code'
    },
    dataRecorded: {
      title: 'Data Recorded',
      deed: 'Deed or',
      waiver: 'Waiver'
    },
    hisDistCont: {
      title: 'Historical District Controls',
      lastSignAppAuth: {
        title: 'Last Sign Application Authorization',
        authorizedBy: 'Authorized',
        by: ' By',
        date: 'Date',
        time: 'Time',
        allowPerApp: 'Allow an additional sign permit application'
      },
      lastAppAuth: {
        title: 'Last Application Authorized',
        appNum: 'Application',
        number: '  Number',
        appDate: 'Application ',
        date: ' Date'
      }
    },
    geoRef: {
      title: 'Geographic References',
      eastWest: 'East/West',
      northSouth: 'North/South',
      xCordinate: 'X-Coordinate',
      yCordinate: 'Y-Coordinate',
      facetMapPageRef: 'Facet Map Page Reference',
      censusTract: 'Census Tract',
      lotNoBlock: 'Lot No/Block',
      tractMapNo: 'Tract/Map No',
      InspnZone: 'Inspn. Zone',
      openSpaceZone: 'Open Space Zone'
    },
    lotDimensions: {
      title: 'Lot Dimensions',
      lotSize: 'Lot Size',
      depth: 'Depth',
      front: 'Front'
    },
    restrictionsArea: {
      title: 'Restrictions (Deed) && Area',
      deed: 'Deed',
      A1: 'A-1',
      A2: 'A-2',
      A3: 'A-3'
    },
    setBacks: {
      title: 'Set Backs',
      left: 'Left',
      right: 'Right',
      front: 'Front',
      rear: 'Rear'
    }
  };

  Result: string;
  TempDate: string = '';
  missing: string = '';

  SitusKey: AddressDef;

  IlmsCache: IlmsCacheIn = {
    SitusHouseNo: '',
    SitusFraction: '',
    // SitusPreDirs: '',
    SitusPreDirection: '',
    SitusStreetName: '',
    SitusStreetType: '',
    SitusSecIds: [
      { text: "id1", value: 1 },
      { text: "id2", value: 2 },
      { text: "id2", value: 3 }
    ],
    SitusSecIdentifer: '',
    SitusSecRange: '',
    SitusZipCode: '',
    SitusZipPlus: '',
    SitusNoFrs: [
      { text: "fr1", value: 1 },
      { text: "fr2", value: 2 },
      { text: "fr3", value: 3 }
    ],
    SitusPreDirs: [
      { text: "d1", value: 1 },
      { text: "d2", value: 2 },
      { text: "d3", value: 3 }
    ],
  };

  applicantFrom = {
    individualOrCorpo_Firm: '',
    individual: ''
  };

  orgForm = {
    m4: ''
  };

  toggleI: number = 1;

  checkbox = {
    chkPrivateStreet: false,
    chkOCL: false,
    chkOverrideGISWarning: false,
    chkCertified: false,
    chkHpoAllowStatus: false
  };

  formM = {
    txtCoordinate1Dir_NOTUSED: false,
    txtCoordinate2Dir_NOTUSED: false,
    txtLotSizeUnit: false
  }

  cmdSubmitDisabled: Boolean;
  cmdSitusNamesDisabled: Boolean;
  cmdCountyDisabled: Boolean;
  cmdToggleViewDisabled: Boolean;
  cmdOccMatlTypeDisabled: Boolean;
  cmdOccGroupDisabled: Boolean;
  cmdOccFireRatingDisabled: Boolean;
  cmdFCC_CodeDisabled: Boolean;
  cmdFPU_CodeDisabled: Boolean;
  cmdReceivedWaiverDisabled: Boolean;


  tmpBufferString: string;

  std100m: any;
  std100mHeader: std100mHeaderDef


  // constructor(public IlmsCache: IlmsCache,
  //             private ilms: IlmsInterfaceService,) { }

  ngOnInit() {

    this.std100m = null;
    this.std100mHeader = new std100mHeaderDef();
    this.SitusKey = new AddressDef;

  }

  ngAfterViewInit() {
    this.InitialLoad();
  }


  toggleClick() {
    this.toggleI = this.toggleI === 1 ? 2 : this.toggleI === 2 ? 3 : this.toggleI === 3 ? 1 : 1;
  }



  DisableCommandButtons() {
    this.cmdSubmitDisabled = true;
    this.cmdSitusNamesDisabled = true;
    this.cmdCountyDisabled = true;
    this.cmdToggleViewDisabled = true;
    this.cmdOccMatlTypeDisabled = true;
    this.cmdOccGroupDisabled = true;
    this.cmdOccFireRatingDisabled = true;
    this.cmdFCC_CodeDisabled = true;
    this.cmdFPU_CodeDisabled = true;
    this.cmdReceivedWaiverDisabled = true;
  }

  EnableCommandButtons() {
    this.cmdSubmitDisabled = false;
    this.cmdSitusNamesDisabled = false;
    this.cmdCountyDisabled = false;
    this.cmdToggleViewDisabled = false;
    this.cmdOccMatlTypeDisabled = false;
    this.cmdOccGroupDisabled = false;
    this.cmdOccFireRatingDisabled = false;
    this.cmdFCC_CodeDisabled = false;
    this.cmdFPU_CodeDisabled = false;
    this.cmdReceivedWaiverDisabled = false;
  }

  cmdSubmit_Click() {

    console.log('Reached cmdSubmit_Click - std100m');

    //     if (this.IlmsCache.ActiveSession === true) {
    //         this.ilms.RequestInit('std100m:UM');
    //         this.ilms.RequestFinalizeJson();

    //         this.ilms.SendRequest()
    //             .subscribe(
    //              (data => {
    //            this.tmpBufferString = JSON.stringify(data);
    //            this.std100m = this.ilms.ProcessResponse(this.tmpBufferString);
    //            this.tmpBufferString = null;
    //            console.log('error code: ' +  this.IlmsCache.ErrorMsg);
    //            if  (this.IlmsCache.ErrorMsg.trim() == '') {
    //             this.Loadstd100mResults();
    //            }
    //          }
    //        ),
    //    (err:any) => {
    //     console.error(err)
    //    }
    // );
    // console.log('returned to cmdSubmit_Click ');
    //  }
  }
  InitialLoad() {

    console.log('Reached InitialLoad - std100m');

    //     if (this.IlmsCache.ActiveSession === true) {
    //         this.ilms.RequestInit('std100m:DI');
    //         this.ilms.RequestFinalizeJson();

    //         this.ilms.SendRequest()
    //             .subscribe(
    //              (data => {
    //            this.tmpBufferString = JSON.stringify(data);
    //            this.std100m = this.ilms.ProcessResponse(this.tmpBufferString);
    //            this.tmpBufferString = null;
    //            console.log('error code: ' +  this.IlmsCache.ErrorMsg);
    //            if  (this.IlmsCache.ErrorMsg.trim() == '') {
    //             this.Loadstd100mResults();
    //            }
    //          }
    //        ),
    //    (err:any) => {
    //     console.error(err)
    //    }
    // );
    // console.log('returned to InitialLoad ');
    //  }
  }
  cmdSearch_Click() {

    console.log('Reached cmdSearch_Click - std100m');

    //     if (this.IlmsCache.ActiveSession === true) {
    //         this.ilms.RequestInit('std100m:DI');
    //         this.ilms.RequestFinalizeJson();

    //         this.ilms.SendRequest()
    //             .subscribe(
    //              (data => {
    //            this.tmpBufferString = JSON.stringify(data);
    //            this.std100m = this.ilms.ProcessResponse(this.tmpBufferString);
    //            this.tmpBufferString = null;
    //            console.log('error code: ' +  this.IlmsCache.ErrorMsg);
    //            if  (this.IlmsCache.ErrorMsg.trim() == '') {
    //             this.Loadstd100mResults();
    //            }
    //          }
    //        ),
    //    (err:any) => {
    //     console.error(err)
    //    }
    // );
    // console.log('returned to cmdSearch_Click ');
    //  }
  }

  mnuCopyLast_Click() {

    console.log('Reached mnuCopyLast_Click - std100m');

    //  if (this.IlmsCache.ActiveSession === true) {
    //         this.ilms.RequestInit('std100m:DI');
    //         this.ilms.RequestFinalizeJson();

    //         this.ilms.SendRequest()
    //             .subscribe(
    //              (data => {
    //            this.tmpBufferString = JSON.stringify(data);
    //            this.std100m = this.ilms.ProcessResponse(this.tmpBufferString);
    //            this.tmpBufferString = null;
    //            console.log('error code: ' +  this.IlmsCache.ErrorMsg);
    //            if  (this.IlmsCache.ErrorMsg.trim() == '') {
    //             this.Loadstd100mResults();
    //            }
    //          }
    //        ),
    //    (err:any) => {
    //     console.error(err)
    //    }
    // );
    //    console.log('returned to mnuCopyLast_Click ');
    // }
  }
  Loadstd100mResults() {
    this.std100mHeader.NewHouseNumber = this.std100m.NewHouseNumber;
    this.std100mHeader.NewFraction = this.std100m.NewFraction;
    this.std100mHeader.NewPreDirection = this.std100m.NewPreDirection;
    this.std100mHeader.NewStreetName = this.std100m.NewStreetName;
    this.std100mHeader.NewStreetType = this.std100m.NewStreetType;
    this.std100mHeader.NewPostDirectional = this.std100m.NewPostDirectional;
    this.std100mHeader.NewScndIdentifier = this.std100m.NewScndIdentifier;
    this.std100mHeader.NewSecondaryRange = this.std100m.NewSecondaryRange;
    this.std100mHeader.NewZip15 = this.std100m.NewZip15;
    this.std100mHeader.NewZip69 = this.std100m.NewZip69;
    this.std100mHeader.NewSitusCity = this.std100m.NewSitusCity;
    this.std100mHeader.NewSitusState = this.std100m.NewSitusState;
    this.std100mHeader.NewSitusType = this.std100m.NewSitusType;
    this.std100mHeader.NewSitusNameType = this.std100m.NewSitusNameType;
    this.std100mHeader.NewNameLast = this.std100m.NewNameLast;
    this.std100mHeader.NewNameFirst = this.std100m.NewNameFirst;
    this.std100mHeader.NewNameMiddle = this.std100m.NewNameMiddle;
    this.std100mHeader.NewAssessor13 = this.std100m.NewAssessor13;
    this.std100mHeader.NewAssessor46 = this.std100m.NewAssessor46;
    this.std100mHeader.NewAssessor79 = this.std100m.NewAssessor79;
    this.std100mHeader.NewAssessor1012 = this.std100m.NewAssessor1012;
    this.std100mHeader.NewAssessor1316 = this.std100m.NewAssessor1316;
    this.std100mHeader.NewAssessorDupF = this.std100m.NewAssessorDupF;
    this.std100mHeader.NewOffice = this.std100m.NewOffice;
    this.std100mHeader.NewCensusTract = this.std100m.NewCensusTract;
    this.std100mHeader.NewRecdWaiveDate = this.std100m.NewRecdWaiveDate;
    this.std100mHeader.NewRecordedWaived = this.std100m.NewRecordedWaived;
    this.std100mHeader.NewSqFootAcre = this.std100m.NewSqFootAcre;
    this.std100mHeader.NewLotSize = this.std100m.NewLotSize;
    this.std100mHeader.NewDepth = this.std100m.NewDepth;
    this.std100mHeader.NewFrontage = this.std100m.NewFrontage;
    this.std100mHeader.NewFrontSet = this.std100m.NewFrontSet;
    this.std100mHeader.New1stSideSet = this.std100m.New1stSideSet;
    this.std100mHeader.New2ndSideSet = this.std100m.New2ndSideSet;
    this.std100mHeader.NewRearSet = this.std100m.NewRearSet;
    this.std100mHeader.NewBldgCnt = this.std100m.NewBldgCnt;
    this.std100mHeader.NewDwlgCnt = this.std100m.NewDwlgCnt;
    this.std100mHeader.RecordedDate = this.std100m.RecordedDate;
    this.std100mHeader.RecordedBy = this.std100m.RecordedBy;
    this.std100mHeader.RecordedTime = this.std100m.RecordedTime;
    this.std100mHeader.NoOfStories = this.std100m.NoOfStories;
    this.std100mHeader.Ownership = this.std100m.Ownership;
    this.std100mHeader.ModuleEntry = this.std100m.ModuleEntry;
    this.std100mHeader.CouncilDistNumber = this.std100m.CouncilDistNumber;
    this.std100mHeader.Coordinate1 = this.std100m.Coordinate1;
    this.std100mHeader.Coordinate2 = this.std100m.Coordinate2;
    this.std100mHeader.Subdivision = this.std100m.Subdivision;
    this.std100mHeader.CanCreateProj = this.std100m.CanCreateProj;
    this.std100mHeader.LegalDescEntry = this.std100m.LegalDescEntry;
    this.std100mHeader.KeyMapNmbr = this.std100m.KeyMapNmbr;
    this.std100mHeader.MapNo = this.std100m.MapNo;
    this.std100mHeader.BlockNo = this.std100m.BlockNo;
    this.std100mHeader.LotNo = this.std100m.LotNo;
    this.std100mHeader.InspectionZone = this.std100m.InspectionZone;
    this.std100mHeader.OpenSpaceZone = this.std100m.OpenSpaceZone;
    this.std100mHeader.OccupantLoad = this.std100m.OccupantLoad;
    this.std100mHeader.OccupantType = this.std100m.OccupantType;
    this.std100mHeader.County = this.std100m.County;
    this.std100mHeader.RestrictArea1 = this.std100m.RestrictArea1;
    this.std100mHeader.RestrictArea2 = this.std100m.RestrictArea2;
    this.std100mHeader.RestrictArea3 = this.std100m.RestrictArea3;
    this.std100mHeader.DeedRestriction = this.std100m.DeedRestriction;
    this.std100mHeader.FccCode = this.std100m.FccCode;
    this.std100mHeader.FpuCode = this.std100m.FpuCode;
    this.std100mHeader.Filter1 = this.std100m.Filter1;
    this.std100mHeader.Filter2 = this.std100m.Filter2;
    this.std100mHeader.Filter3 = this.std100m.Filter3;
    this.std100mHeader.Filter4 = this.std100m.Filter4;
    this.std100mHeader.Filter5 = this.std100m.Filter5;
    this.std100mHeader.Filter6 = this.std100m.Filter6;
    this.std100mHeader.HoldData = this.std100m.HoldData;
    this.std100mHeader.Certified = this.std100m.Certified;
    this.std100mHeader.HpoAllowed = this.std100m.HpoAllowed;
    this.std100mHeader.HpoAllowedBy = this.std100m.HpoAllowedBy;
    this.std100mHeader.HpoAllowedDate = this.std100m.HpoAllowedDate;
    this.std100mHeader.HpoAllowedTime = this.std100m.HpoAllowedTime;
    this.std100mHeader.HpoApplnNo = this.std100m.HpoApplnNo;
    this.std100mHeader.HpoApplnDate = this.std100m.HpoApplnDate;
    this.std100mHeader.BldgName = this.std100m.BldgName;
    this.std100mHeader.PrivateStreet = this.std100m.PrivateStreet;
    this.std100mHeader.CityLimits = this.std100m.CityLimits;
    this.std100mHeader.GisOverride = this.std100m.GisOverride;
    this.std100mHeader.RecordType = this.std100m.RecordType;
    this.std100mHeader.RecordCount = this.std100m.RecordCount;
  }

  LoadLocalData() {
    // this.SitusKey.StreetNo = this.IlmsCache.SitusHouseNo
    // this.SitusKey.StreetFraction = this.IlmsCache.SitusFraction
    // this.SitusKey.StreetPreDirect = this.IlmsCache.SitusPreDirection
    // this.SitusKey.StreetName = this.IlmsCache.SitusStreetName
    // this.SitusKey.StreetType = this.IlmsCache.SitusStreetType
    // this.SitusKey.StreetPostDir = this.IlmsCache.SitusPostDirection
    // this.SitusKey.StreetSecId = this.IlmsCache.SitusSecIdentifer
    // this.SitusKey.StreetSecRng = this.IlmsCache.SitusSecRange
    // this.SitusKey.StreetZipCode = this.IlmsCache.SitusZipCode
    // this.SitusKey.StreetZipPlus = this.IlmsCache.SitusZipPlus
  }

}
