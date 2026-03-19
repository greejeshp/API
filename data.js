window.defaultPostmanData = {
  "info": {
    "_postman_id": "597d19a0-fe33-48e1-ae4b-46de9e08a1b7",
    "name": "Pivotal ERP Accounting",
    "description": "# Introduction\n\nWhat does your API do?\n\n# Overview\n\nThings that the developers should know about\n\n# Authentication\n\nWhat is the preferred way of using the API?\n\n# Error Codes\n\nWhat errors and status codes can a user expect?\n\n# Rate limit\n\nIs there a limit to the number of requests an user can send?",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "14035817"
  },
  "item": [
    {
      "name": "Account",
      "item": [
        {
          "name": "DefaultRpt_Email",
          "request": {
            "auth": {
              "type": "noauth"
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"DateFrom\":\"2024-07-16\",\r\n    \"DateTo\":\"2025-07-16\",\r\n    \"LedgerGroupId\":12,\r\n    \"AgeList\":\"60,90,120\",\r\n    \"ToEmail\":\"sachin@dynamic.net.np\",\r\n    \"CcEmail\":\"sahsachin@live.com\",\r\n    \"Subject\":\"Test Party Ageing Email\",\r\n    \"Message\":\"Please find attach file\",\r\n    \"Format\":\"excel\",\r\n    \"RptPath\":\"\\\\Report\\\\ExcelFormat\\\\PartyWiseAgeingReport.xlsx\",\r\n    \"FileName\":\"Ageing.xlsx\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/DefaultRpt/PartyAgeing",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "DefaultRpt",
                "PartyAgeing"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AutoCompleteLedgerList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"searchBy\":1,\r\n    \"searchValue\":\"\",\r\n    \"ledgerType\":0,\r\n    \"voucherId\":409\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/AutoCompleteLedgerList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "AutoCompleteLedgerList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetVatRegister",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "v-k0KyOtAVDvlKabKU2OE4rB5hy5tqORa2nAKX1uH3DqfsxXMsiW22VA2MHixMyGVApJArDHEquArch5etNS1m5PwOk1y7AdNWu88E0cuEflNfzEtEInyXAIMbuK-pTfKm6Sou1AtBX6OQosquYW2FezGNTFA8YwPSdMbBeYm7mC8SRaeKDLc8bCxZIv30HzNXi16LtwZW1ovjQ_ITHeAY2JuZRbqmTff0oZUdmDhKsFL7wD3_CeOEvqovgS8ndxqlA-8Ye9_GuzGJgJvkzcLvIZDk8ZO0lqGcB_u6KvJgN5jSZsDWfbYXCqxdJLI3uANx9uLgNz3dr3Ev2Ve_ukVAnZ_pPxO0CxNrCNEsSbv3tRfXJSMl2qqBROPjO76K6JGfFlrt_0ASFQf2RbAfaHRtyNoM5qvTGHLlMViRTBQRgU7lgN5VgBgIgTHcHL5UKqECitXefMB6a_e9JBzR7FZA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"reportType\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetNewVatRegister",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetNewVatRegister"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetAreaList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "W_lwGmY1S6c-efboQO7yE_LISxYqh_iGkFkrg0nx0dFrLhp0ZWYC0K2H2f0HaqJhvcJDLvoDRVQjAboefIWWYtUkvliWcoiWvcBTz97XHZWuYDILs6Z_bW1kwLX-AukGmyrSIh_coP2DEBTeSBFXM_rkkfNani-Pie_n4MBDrbzFN-P6XWkEOmfOL6GS72RGUtTrOMXHEDifOgEd1JMAos9Nn5xvZdknWrP_nidpwfbpOsx1MM_2NlKy6w5UBhF8ws7rm2sz5r3lxxWWKzHaJBQFfakc2qT_begD5W3MzYtkpQJ8AM0zXTvUUn4x46_F3G_TfEkKLfu8c20PbhSJ7sISCSMjqTvek1l3VK-2MVQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Account/GetAreaList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetAreaList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveDebtorRoute",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"Tinkune\",\r\n    \"Code\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveDebtorRoute",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveDebtorRoute"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveDebtorType",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"wholeseller\",\r\n    \"Code\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveDebtorType",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveDebtorType"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveAgent",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"Ram\",\r\n    \"Address\":\"KTM\",\r\n    \"Mobile\":\"9802921232\",\r\n    \"Code\":\"Coo1\",\r\n    \"Level\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveAgent",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveAgent"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AccountSalesVatRegister",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "oV1ih5pvKoo1gnX-8_WprmLxjOapT4tG-YQsj1kMvPtamAaabwufU4yCbzRoD_eQPoi_b8vaMULcXppFl00GAUwtf5ueJEGh57XaaEQGh-nZ06_lPkciD-DaN_vYlVeUUDsUYXLf44ydR0U6sqKKeXrtAjiU61-tQVdLDFu5jcIM6FPRB1_JL06WaDp6VECQBMcKNcccaxjFVy_RVZqMc_ihCsq_gt_xuw-rqTW6vKGvcRWYncW4UngQXw9Tvpeus8hxseyTQhlwgTkZeM2sVkvfpxN_64iN_PcNZy6JPJtlzjy9oo8vN413R76q0TqDfHZC6bHFEVn2Um7vlvB8af6GuxEma7_NYijiCc3VEICNbqZOfpv4S8f4URKUv8A76ch6JaGbcPQuqklEvzak5Q",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-05\",\r\n    \"dateTo\":\"2021-03-05\",\r\n    \"voucherId\":0,\r\n    \"branchId\":0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetSalesVatRegister",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetSalesVatRegister"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SalesmanWisePartyList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "zPNXUAfwKwXooioaYKQSoj8Q3WUNuJj-T50R8_03uo7YG4raTUhcaOsr4KcXwtWCRz3_G9imZ6fHJQ9DVWXhJTYFKcgRNDVjK4p7KlZL1u048COJqBzd36XX6AcQx2yS3qmZ1rQpFe1dX6vwN5hB_qJUzb_hW8YgeUeDUX5sqNz8vL-iVBqdaeP669uJcES4fBCj1H3-NNs2xHOegHglcx4jMtBiHm-S5KY7GkfsECWVhLvzSZ9HaG9drB8f8zm7lq5M29cVqL5541Fgu6HAvLLQh8eOWkpN-pz5st1Gs8aPFvDKGTKaFtEt5p0Eh6ntJYwTk9gzxW-Wxdfv1VZb6BvReCrPoV7JViOiVhjpStsaj-F8IcXQBlPIIGSPa8JZc34xCxIIY97cv9ZXdCsOHwTgHA2f7Ton4Fg-8JtierE",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/account/SalesmanWiseLedgerList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "SalesmanWiseLedgerList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLedgerGroupList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "DpK6tzMLacNNPXhUuY5JUoYjpPhh55riuMgnYvxKR3urqNq9QBeBrq7g2ek116dwuVGJzGuMD_kv1WTubJsCP9mXHaHOpYbFo1rkYcuVNzI8sjZhzr61xvk57TXSYrHB8IIssbFZtxhzLCIwMbVmOTLdpZmCZkKM_1km8IHO70wha58UEd6w-FlyY_Yxx-UgDsD6ErPxqZ1mbOeiKZu1YP2ifZ5rDHKE190tRYnHtI3dUepDpxSL-Zl104goAQKlRxD4hHaKqf-HCRxKH6g2ZR4xWzmA0SsyaIWU3VxgGmahg45KqDSUG16npELm9xQcFW2yoerdo-oCIGePZaIAfPtwx9PqhxYuRqgzaS0y-bxg08azQda2u0PWygQCHHZ8PYoacqAmLeIbyHL-elDU_w",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"types\":4\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerGroupList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerGroupList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "LedgerGroupSummary",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "nabMwGjok5tag57FwufSnbiF1jaFXg3X7fd3vBy7s4YVcXhfSF_q2zgSo847cKSgyKc9pJMA_czsZAcC1qZ4xSKBT0W6yo9qJdiTenT1zBMh7htPk311oqyHxF7BjMrChtBY5KqRR7XpN5xPejbFGoPyt-XYctvi6HmoPkR9fv8It_Qq9SN7erlZdUHGmyEcRATm33UPUI4yE25nEeNybQK0xXJjBniJV3C63UDCzLoEIC_RO3RiaSeqRKuLGH96IEiSYpZi07fpcA56nPru3nWyxVZ06kAztIs0_8QzqXWuIiYnxjny_w6dBw6KmpwCcSkRqH-i0zyTVMWrJOJuTZvqdlOnVXhe5F3eLs3jdeiLnUxyMCwZ01G8bQfmbA6GARcsecx2VGsWF4Hl0Q6PjQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-07-16\",\r\n    \"dateTo\":\"2021-03-03\",\r\n    \"ledgerGroupId\":1,\r\n    \"forList\":true\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerGroupSummary",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerGroupSummary"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetStatutoryReport",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "nabMwGjok5tag57FwufSnbiF1jaFXg3X7fd3vBy7s4YVcXhfSF_q2zgSo847cKSgyKc9pJMA_czsZAcC1qZ4xSKBT0W6yo9qJdiTenT1zBMh7htPk311oqyHxF7BjMrChtBY5KqRR7XpN5xPejbFGoPyt-XYctvi6HmoPkR9fv8It_Qq9SN7erlZdUHGmyEcRATm33UPUI4yE25nEeNybQK0xXJjBniJV3C63UDCzLoEIC_RO3RiaSeqRKuLGH96IEiSYpZi07fpcA56nPru3nWyxVZ06kAztIs0_8QzqXWuIiYnxjny_w6dBw6KmpwCcSkRqH-i0zyTVMWrJOJuTZvqdlOnVXhe5F3eLs3jdeiLnUxyMCwZ01G8bQfmbA6GARcsecx2VGsWF4Hl0Q6PjQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-07-16\",\r\n    \"dateTo\":\"2021-03-03\",\r\n    \"reportType\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetStatutoryReport",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetStatutoryReport"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPartyDuesBill",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Bqk4FoNiDcSdwG-C7M-3j_Z0qDQd78NkBFmUYyBioW3zxAArU3F_46y5Xf-a-8GEA8TF2ArhaMTv2dfHMLVvy29eEJzYj2foJ_hzTcu-meAy83sgPVxg6Y0Yrc8cHR0OCbhcd9TjOzQHeMfj4pL0x_lAmRzRKfBFfi_Udobn2tpE8nreEhZ9nfHhW41D57c8cGyBJJxWvHbDpX_9JNeM8KL4BZoEHUHuNa-X9BggTscV_rziB4hl-ED9V2ZCCDAgpFdRmQi-e2DAWkLSiV9qRAEZgq0KatW7I5nppsSQ77wzWz1TYGvx0EXOYaE_QJH7sCOoR_d5388kHx0pGAzunj7BxydnO14P8CzoWoFPzpjd3JaMGY-qAdEgH8lTjeuQTKwDc5-Jp89J4sv4NzDh8KSChHyEwutXTVfj4aYL4NY7V7Yhyb2AZ14zjtS8crQmKvLqYSA296ZKoIC-vfIXLg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-12-12\",\r\n    \"salesLedgerId\":0,\r\n    \"ledgerGroupId\":12,\r\n    \"ledgerIdColl\":\"\",\r\n    \"isCreditor\":false  \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetPartyDuesBill",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetPartyDuesBill"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCashBankBook",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Bqk4FoNiDcSdwG-C7M-3j_Z0qDQd78NkBFmUYyBioW3zxAArU3F_46y5Xf-a-8GEA8TF2ArhaMTv2dfHMLVvy29eEJzYj2foJ_hzTcu-meAy83sgPVxg6Y0Yrc8cHR0OCbhcd9TjOzQHeMfj4pL0x_lAmRzRKfBFfi_Udobn2tpE8nreEhZ9nfHhW41D57c8cGyBJJxWvHbDpX_9JNeM8KL4BZoEHUHuNa-X9BggTscV_rziB4hl-ED9V2ZCCDAgpFdRmQi-e2DAWkLSiV9qRAEZgq0KatW7I5nppsSQ77wzWz1TYGvx0EXOYaE_QJH7sCOoR_d5388kHx0pGAzunj7BxydnO14P8CzoWoFPzpjd3JaMGY-qAdEgH8lTjeuQTKwDc5-Jp89J4sv4NzDh8KSChHyEwutXTVfj4aYL4NY7V7Yhyb2AZ14zjtS8crQmKvLqYSA296ZKoIC-vfIXLg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-12-12\"    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetCashBankBook",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetCashBankBook"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetBankReconciliation",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Bqk4FoNiDcSdwG-C7M-3j_Z0qDQd78NkBFmUYyBioW3zxAArU3F_46y5Xf-a-8GEA8TF2ArhaMTv2dfHMLVvy29eEJzYj2foJ_hzTcu-meAy83sgPVxg6Y0Yrc8cHR0OCbhcd9TjOzQHeMfj4pL0x_lAmRzRKfBFfi_Udobn2tpE8nreEhZ9nfHhW41D57c8cGyBJJxWvHbDpX_9JNeM8KL4BZoEHUHuNa-X9BggTscV_rziB4hl-ED9V2ZCCDAgpFdRmQi-e2DAWkLSiV9qRAEZgq0KatW7I5nppsSQ77wzWz1TYGvx0EXOYaE_QJH7sCOoR_d5388kHx0pGAzunj7BxydnO14P8CzoWoFPzpjd3JaMGY-qAdEgH8lTjeuQTKwDc5-Jp89J4sv4NzDh8KSChHyEwutXTVfj4aYL4NY7V7Yhyb2AZ14zjtS8crQmKvLqYSA296ZKoIC-vfIXLg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-12-12\",\r\n    \"ledgerId\":2020    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetBankReconciliation",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetBankReconciliation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "CostCenterClosing",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "rDWTyp6e8jgTruWT6YA2aWEBBzJQjxcKiarOA2yo8NXk0sUpYQ8qBHIBGdQv0lhFsVJYuxS62nVBW8zItAEELBRHBI8T15trp7c3RfNzKnwcIrmVZlADEeone3hBOLzwyub_dPRtwz8SZOKE7c-IsFYUDRTPLEB1r6-BXke_cVXZyx76vtHFYYrXIbVj_F990J1bPlXVvtZd1etyFgRHhB4wSekxiOz5srnOP_KAokRB-J1U32wtPI38Cz_3DJYLkBcpjFl6SocYEZPYI-tvMvm3i3JjSoUfFXZMQQgqyEyGTL1l0Bl1DkySmBnudMFsctJN8jjle6kPwm02BTiyEGvRBADxIRVDqEB_clqQ6dRoQAnJGWrc4l0Yln2YgRLbr5mr34iHmAey_D4iJ3acwA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-05\",\r\n    \"dateTo\":\"2021-03-05\",\r\n    \"ledgerId\":0,\r\n    \"ledgerCode\":\"SA58851\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetCostCenterClosing",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetCostCenterClosing"
              ]
            }
          },
          "response": []
        },
        {
          "name": "LedgerDetails",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "3mUdQACGIHGtq0AZ-gyx6ZXkx9at0e24DJElM0XAs_9tZQioCSj7XZvUV17FL8NeECOR05pst15HaGNcEJuOWmGJTgxg1iTvDsigAG-sHWOoLqNBU5GpZvTTos--1hvq9c_Mc9jl3MMKcrnKmPE4SSYqhVMqa74OQ3K_rgnbiuA31YTEZmQIlN4v__hznbrGOxEcWJlI8QbVrrZhSN8j7bj6wSywOaskchJh1dLrzpntPXTCpsWwn9XS-oht_UXD93UznDclTGnb6sRDd_W_TTBZwTnmCKUkKad7CnzVGIaJiSt0y_8vjkRXgMM8buhg2Bh9tLdSFJiZUyyG30Sw4Af1C1nNm4eFGrrLSnTsqxo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"ledgerId\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetLedgerDetail",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetLedgerDetail"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetAllVoucherModes",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "3mUdQACGIHGtq0AZ-gyx6ZXkx9at0e24DJElM0XAs_9tZQioCSj7XZvUV17FL8NeECOR05pst15HaGNcEJuOWmGJTgxg1iTvDsigAG-sHWOoLqNBU5GpZvTTos--1hvq9c_Mc9jl3MMKcrnKmPE4SSYqhVMqa74OQ3K_rgnbiuA31YTEZmQIlN4v__hznbrGOxEcWJlI8QbVrrZhSN8j7bj6wSywOaskchJh1dLrzpntPXTCpsWwn9XS-oht_UXD93UznDclTGnb6sRDd_W_TTBZwTnmCKUkKad7CnzVGIaJiSt0y_8vjkRXgMM8buhg2Bh9tLdSFJiZUyyG30Sw4Af1C1nNm4eFGrrLSnTsqxo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/account/GetVoucherModes?VoucherType=3",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetVoucherModes"
              ],
              "query": [
                {
                  "key": "VoucherType",
                  "value": "3"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPDCList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Ujo6SIYdQsw7FBIciKW__hmQiExu1wpAvm8H-cuttY52XPxC9swyJh8IjrO9V679OiWGbywpEhqE0sLVPHraEQR4-1Sz967ddBFo_WkyvbkBcRj6koBJ8Suenz7U2n3Dj7StkNk5g0ZSTCt25IPze8tRVKqA7khKRqzbEmp9GrFW84LwfuQsjHTHA7VxFuAyxyJKYDP3aAl5qWD-V0Kap7kefyBKncvJIMj7AWb4MGh-YyVkOOkLT45Y_qXCUhFcZ1LERvZPKL6AyMMLY0Vj-s-yeOQ1NIpNExb7wlZ6W22Q_BtZu78FO4vicBW_jj56c0etp8jqRFXIDg1n5Zm4FE-RQIwxzZz4Ym-QZUccvW1UKgbccsuz7qCPxEWTiDRE",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-01-01\",\r\n    \"dateTo\":\"2020-12-17\",\r\n    \"reportType\":5\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/account/GetPDCList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "account",
                "GetPDCList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCostClassList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "nEt_O2RdV9bi06rOL3By0ChsxJeQAJtUsIcc-ObwOIRXA1bkejs4vG3IRnDIlP-99tq6PpYx1yVfowBMSjz1JfSkzKm_PWPHxbm2jgV2nBufkhJB3KEQu_zVe6mX0tNzMUtqSMw8WsPpeB5-etkW0K44_iAQuD4scUmK8LCzoohDrsz3U9_3tVM3tNkk9ecYmHVCqe1tQytK7vJZz2WYzSwHrMDPtrQZNfHJhtik2Qq_DawAnw5Zzb0Jwyj6u044uswOkuC-GKmjVQiBrs0bodv-15daFqTHVp53LDD6k2Hq55asknYohPTKIOWYhniEuAAzZxuxS6I35dRcyaU2-zgwjg17FNjXK0fWjom5Pv4",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Account/GetCostClassList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetCostClassList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveBG",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "l-Hm-fgy9Uz48yIvh1bBeZvoNvjzy0_IRlE-F3COp3YmX62th9knpv7ZFTpug3_VgMdf3JL3nns7NU4C-SgbUN5D9jxk2E-0z63H58KcPHsBKsOu-RAQNYHLbz6ROxLzXjOGEDOgEsr3OXV54msIn-k9Jl2rXqQ-wgdX3PvrUenL3TnKVV-357_O2J8A5-ZE3Wrwvb-X6dGUX8WpsoIzWaB0BXXhucGBTtYoqkX8arXBOlHfRePhqvmAN_MRo77TCxQbYroylPyJLjfJqF8yCnYuihrJFTiavY3sleAxmE8e4KX2VK859PZoW7d8MX6C5zoCdcIPYiIiZMD5_Pmz2gUpSQxO_1te9-YsQ6EG_XvrDclgDXA0FEAwOcolTnaqR7li8aTklxow5SvZ_5Gtag",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "type": "file",
                  "src": "/C:/Users/admin/Desktop/Dabur.jpeg"
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  Name:'shyam kiran',\n  Status:true,\n  Remarks:'new remarks',\n  IssuesDate:'2020-01-01',  \n  ExpiredDate:'2020-10-23',\n  Amount:50000,\n  BGNo:'121212',\n  BranchName:'KTM', \n  BankName:'sanima bank',\n  LedgerId:1  \n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveBG",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveBG"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SavePDC",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Jqbw5hazCviNFHY4-zGS5W4NuAenT8EaT6yB9-jltk7JyaFkmAnVXFymA6VlzyjPp1OjWVF2zQJzIxFVQaF4DuWcsfPyROaYXCIgE8uLSnGWUydWyPiH1s3rcTRNMm6FYGemDnVzRc1lOmcpYPR6-n8Nzw4GaK0pKHPPUmwt3a4_CcHQIaY-sQZdk1Ms2eGLMK_K0cAB9Xbow8twsqG20CELg1Yh8XFwPkvpJe0Ip1szFLpb0zTTXcXdIFFrbULoYLZOlemnCxqNmbZVObZjYhFY5Fnn7bIgLR57B8e2zITMfw02UrZMJnZTKSjXne6rYcpql1fY21_3SZRdNz8Te-E6HkkwQ8ezwKg_11T4_56YwWPixYNQ8ijwcd3NIXe0",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "type": "file",
                  "src": "/C:/Users/admin/Desktop/Dabur.jpeg"
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  VoucherDate:'2020-10-23',\n  LedgerId:1,\n  AgentId:0,\n  ChequeDate:'2020-12-20',\n  BankName:'Sanima Bank',\n  BankBranch:'Kathmandu',\n  ChequeNo:'121212',\n  Amount:15000,\n  Notes:'if not cleared then call on this nul12121212'\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SavePDC",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SavePDC"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveJournal",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "SpkkksKCaNRxH1d-LX1qTRDe1dPaE3rZVS9r5tsuciBrsKUo4OP_Bk_9v0t_9MvlIF2CtsifRBJEw6XCqwpXsj_4WShBPONb1FRE-Fr0uAMNISAgAg9y3AZ-kHVTA2AvTsTCfALt1oVwJQS1nwZQnep_dsfQ5fTTUTG1-Xs_WNhKAh2H4C16yrwdJRbbkM9tVEeGejREjJ8oXlwGyYSppuJukZtQGnoQY387JumhvrJg_xYNVgiZRJEsvdQweU-1Qq4CkXGL_XJT1kUDy-omQ-s3E9DOwNe_upIQKRn5LEGu3lI6l95XOk_fRhpaZsWGh6TnIB8j984qUeKXJMav4szqoeKv4Q868c-emn6NnWg",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "contentType": "",
                  "type": "file",
                  "src": "/C:/Users/admin/Desktop/Dabur.jpeg"
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  VoucherDate:'2020-10-23',\n  ManualVoucherNO:'',\n  VoucherName:1,\n  RefNo:'test ref 1212',\n  Narration:'Test Narration',\n  LedgerAllocationColl:\n  [ \n    {\n      DRCR:1,\n      LedgerId:1,\n      DrAmount:5,\n      CrAmount:0\n    },\n    {\n      DRCR:2,\n      LedgerId:2,\n      DrAmount:0,\n      CrAmount:5\n    }\n  ]\n}",
                  "contentType": "",
                  "type": "text"
                },
                {
                  "key": "file1",
                  "type": "file",
                  "src": "/C:/Users/admin/Desktop/Journal.xlsx"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveJournal",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveJournal"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveLedger",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\n\n                \"Name\": \"222758 - PODARAN FOODS INDIA PVT LTD\",\n\n                \"Alias\": \"\",\n\n                \"Code\": \"0000222758\",\n\n                \"LedgerGroupId\": 12,\n\n                \"Address\": \"454 MALAPALAYAM, CHITAMPALAYAM, KANGEYAM TALUK ,TIRUPPUR DISTRICT IN\",\n\n                \"IsImportExportLedger\": true,\n\n                \"DrCr\": 1,\n\n                \"CurrencyName\": \"INR\",\n\n                \"Status\": true,\n\n                \"StatutoryDetail\": {\n\n                                \"LedgerId\": 0,\n\n                                \"PanVatNo\": 0\n\n                }\n\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveLedger",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveLedger"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveLocalReceipt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "rxGpbrFEtjNK9edo-i4RJXDKVBZw3LNT_dpORU6LxzfT4_ESCQwyaDw1BEHJvPidg8qHWKOi-76ZiHKeRKPIrAG5Fn7Rb1YRSNmy1JdvQ8RZ7Xbh6lh984rGXUiZ9Z3uMWQByz3vBnI0gUCwPIAqLOQWG1NwWxIUcX7yntbzR9eiNG6SLsSuXf3Q8j3qUz6wyBkSaCkJAll2jox4QLr-qu5EDo9TxFwJcFWM09P7y8AEG0bNuXWOraLC3xaX84VbWBlWFFOXROiEUil_h1XKEx4tp7yj56ECGQCBigQX3_3FKfgOSu-w5MMbDJwsXlJoFvJZ-Uo4PgvnqcBrE7wCDOYHDCUH30B2wlg5ZFusBPI2DiWaXITO4ud_h5Oz_mQ3c6ZR2cgDSri8TiufeX1a1XFL7tIlfEUR7txdEAE9UZog4_cthpwbYLmtjlh_K0mU",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"PassKey\": \"local@Rec2022\",\r\n  \"CustomerCode\": 1726,\r\n  \"Amount\": \"11300.00\",\r\n  \"LedgerCode\": \"B0183\",\r\n  \"Narration\": \"SANIMA BANK 66 2082 RENEWAL CHARGE Jul 17 2025 12:00AM SELF\",\r\n  \"RefNo\": 4064,\r\n  \"BranchCode\": \"01\",\r\n  \"UniqueId\": 12087,\r\n  \"VoucherName\": \"Receipt\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveLocalReceipt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveLocalReceipt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveReceipt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "contentType": "",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "src": "/C:/Users/admin/Desktop/Dabur.jpeg",
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n     \"VoucherName\": \"Receipt\",\n    \"CostClassName\": \"Primary\",\n    \"AutoVoucherNo\": 5,\n    \"CurRate\": 1,\n    \"Narration\": \"\",\n    \"VoucherDate\": \"2023-09-15\",\n    \"AutoManualNo\": \"5\",\n    \"EntryDate\": \"2023-09-15\",\n    \"LedgerAllocationColl\": [\n        {\n            \"DrCr\": 1,\n            \"LedgerName\": \"Cash\",\n            \"Narration\": \"\",\n            \"DrAmount\": 200,\n            \"CrAmount\": 0,\n            \"CostCenterColl\": [\n            ],\n            \"ItemDetailsCOll\": [],\n            \"TDSVatDetailColl\": [],\n            \"CheckDetails\": {}\n        },\n        {\n            \"DrCr\": 2,\n            \"LedgerName\": \"CostCenter Ledger\",\n                       \"LFNO\": \"\",\n            \"Narration\": \"\",\n            \"DrAmount\": 0,\n            \"CrAmount\": 200,\n            \"CostCenterColl\": [\n                {\n                    \"CostCenterName\":\"Shrinkage Loss\",\n\"DrCr\": 2,\n                    \"CrAmount\":200\n                }\n            ],\n            \"ItemDetailsCOll\": [],\n            \"TDSVatDetailColl\": [],\n            \"CheckDetails\": {},\n            \"BillRefColl\": []\n        }\n    ]\n}",
                  "contentType": "",
                  "type": "text"
                },
                {
                  "key": "file1",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "src": "/C:/Users/admin/Desktop/Journal.xlsx",
                  "disabled": true
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Account/SaveReceipt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "SaveReceipt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLedgerVoucherDet",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"ledgerId\":2029 \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerVoucherDet",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerVoucherDet"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetDebtorType",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Account/GetDebtorType",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetDebtorType"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetAgentList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Account/GetAgentList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetAgentList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "StockReport",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n     \"dateFrom\":\"2024-03-09\",\r\n    \"dateTo\":\"2024-03-10\",\r\n    \"productGroupId\":\"3\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetStockReport",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetStockReport"
              ]
            }
          },
          "response": []
        },
        {
          "name": "DayBook",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n     \"dateFrom\": \"2025-12-28\",\r\n     \"dateTo\": \"2025-12-28\",\r\n     \"voucherType\": 0,\r\n     \"branchId\": 0,\r\n     \"isPost\": true\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetDayBook",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetDayBook"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetNewVatRegister",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"reportType\":\"1\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetNewVatRegister",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetNewVatRegister"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLedgerCategory",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"ledgerGroupId\":12,\r\n    \"dayRange\":\"60,90,120\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerCategory",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerCategory"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLedgerChannel",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"ledgerGroupId\":12,\r\n    \"dayRange\":\"60,90,120\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerChannel",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerChannel"
              ]
            }
          },
          "response": []
        },
        {
          "name": "LedgerVoucher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "HNUePvmbPKJVLoVHSwaTlQjWsGIhqsiUIX22aoy3139zXqWQX_t1-IV5d4558MKUt1XftMimsLg6uNnX0H5wCS9FWyq7mfP_CW0yH6XVR-tSoMQvJm2KY9DcoQ5L7nNA9PwURLMG6NPpK7c27yFMXsPLc4YznboXiGxNVCN0rQ4C-dWexEBit7BR96g4PQ1AcCR-5HMAH12oIalgLoctHLC95o6WlZQaZxe4W_w5TG4--jlYT5wDbU7OF2jAs3dzMDDlwLHkMBvfGVI2LF5hyPi-T1dP5KBRlq1Uotnu-xNw1SKAvaRe8LUKMNN7RG5awwRE7hYn-JXcuxDhISAAD1_mMeeGnqpvQZiBo9UMpL4weKdpuwN3Pkhxs_TDPSTUeH_ay_EG4CS65E8RvzLkGQABIYBnp8qy5Aj074-MfaF1W1Z8bBW49PP4jgDLsW5N",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-07-16\",\r\n    \"dateTo\":\"2023-03-17\",\r\n    \"ledgerId\":1 \r\n}\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerVoucher"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PrintLedgerVoucherDet",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2024-07-16\",\r\n    \"ledgerId\":1 ,\r\n    \"doPrint\":true\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Account/GetLedgerVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Account",
                "GetLedgerVoucher"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Inventory",
      "item": [
        {
          "name": "GetAllPaymentTerms",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "p2i5VgDFF_Ba9UwiBEtJP_vkRMjvi8y12z9z3492aHZOtZ-ho9nJD6dj6ZPIf3O54_gmCC6viejLykqj4sal2lvRvQzVKxILhnC94z--k35ugmJG3jFNWIgIMaucx_Bnn8NDjSSupdKxJ9UGL3qZQLPwRhp8ntumsum56_ky9KRuz_ZJC6G8C1c5TOkJ8tx0BVChQfC6j88hTHpCDr2LzR34Rfb-2J7h10ChJmBzqyLNTsk8YT-evIBxnq5PFo322KsDCglOWQGGbfDYDAA9i3GmA8UkXA8nDAkpaHvyhKlKjMoixUrJouE1Hcoy6qKGKvdlEAqmb_Nnb_IEV-Wl4qs_eop54XvV7lV8Qg2JFBSIRjZFqyj-l_Flou3JuXVRC5GB5rTLiyT00d8_-6ec-qYN04h-Cg4mnjNQHSxo3mAkwRgIqBQvmuOEu1p8adfD",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetAllPaymentTerms",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetAllPaymentTerms"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SendRdlReport",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "r-nRkjBbstZvdvdeHp8SBJ6ZjB-uqjXfTj30KvG9-ZF9nKuIeH1c_E9HPOfCJM2wAMY5XWSQIqddzRvTfST9PdtduvIOhS9PIIjs7fzNDrlVI6McTN-DjFBJ8jprbc_19QCIkHWjdWHhdp5EAFXxJIYOfOavzoe-TgZyt-CR_QRI63EgW_70tviNUeYeXCRxEE1CmQcEuv5O-mridQk3g-dWMIZZYfYYAiqEznZ4-0-_rMQfJiFKVykCVj5OZOrD04y7sx1pc8tRDKptmXAZc-HtkvY6wXK4_m2QF2JZpYyWIv6z83UcETn72yHBGqvvkRYC8c45nKBt16M5xKx262TpzDvnDZsrNNe5aAQWg72VARMpNRyA3JjVlSLDVEVE6uYQEG8xXrGcR-KOgnd-Tg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n     \"entityId\":\"210\",\r\n\t\"rptTranId\":\"513\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SendRdlReport",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SendRdlReport"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PendingSalesOrderEmailToUserWithRangeValue",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "QWjetp-1Yf0TNNwtDBC8mURryA-C-nRZzmGLsXYspXeutMFXelYFl9xaZlFk5zFqJmj1lEqJCSSx36iF-cnyYVFt6gatpQ8xgpKWU37SEnFtC7suKEPyLPYdS5gkUhjQ4sdUBjy6A3v153mMzdL7Ljyf1uZAfpcwYxA6jzKFxQvjI_uoBikhE8eAWFOBso-NN3Da88pJuQKMV4MohFoenqqGcw3pHIMdEcPRDNEcgSHX3eK8xj6jara3AIGpMYgWOiShXZl154rAapJmdJhzTgMHrEf3BqwDFN5wXZ76NdnuFQQ5-4p-zkav9k3pTMBZz35KBPWznp_R4P2XZ7gPjqOG-b27cLkqhZvD4nbMyCdXD2mAhFR2QDgP60O7-6m39xit-x2at8gqkFkFYyGLxQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-07-16\",\r\n    \"dateTo\":\"2021-01-30\",\r\n    \"r1\":15,\r\n    \"r2\":30,\r\n    \"r3\":60\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/PAEmailToAgent",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "PAEmailToAgent"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PendingSalesOrderEmailToUser",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "13sP1QdRl62B68R4nAB0GR950xeNJB6A_L0HaVaQZng4zqY1YG_aILAAnpwPrqdtJPTUNks6-7eOE5Nx8-xtUsnmhi_7ZeJpIuoGdURPiLT391syGqXK2UXvreeGKtWyV6APYbWOKmRsOXTZ94DFL1Yi1Hq7ZLmD-C8C4webtL9fF3GtzUDX444FnTVL3pTcUfXw_CLpPG7gPSOf41Iim3aq5vfFhOLDlpdqgqO7QBNg81aJErNX7ZbTyINn_FsrOIfZA-cRAftfAgJ6ZUqmdYsBoxoMVWw_fld2T_7ClMsDcL3qUP3adW1r-r_9wueKTI6OPJJu7NcevAQWrMz1Wwd_LZh8po7DCnNY_6XmCKyGRzHc0ROlc922eHs7Lm3kBm3ALjEhJlPvX7weH9jhsg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-01-25\",\r\n    \"dateTo\":\"2022-12-29\" \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/DailySalesEmailToAgent",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "DailySalesEmailToAgent"
              ]
            }
          },
          "response": []
        },
        {
          "name": "DailyOutStockBillEmailToUser",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "13sP1QdRl62B68R4nAB0GR950xeNJB6A_L0HaVaQZng4zqY1YG_aILAAnpwPrqdtJPTUNks6-7eOE5Nx8-xtUsnmhi_7ZeJpIuoGdURPiLT391syGqXK2UXvreeGKtWyV6APYbWOKmRsOXTZ94DFL1Yi1Hq7ZLmD-C8C4webtL9fF3GtzUDX444FnTVL3pTcUfXw_CLpPG7gPSOf41Iim3aq5vfFhOLDlpdqgqO7QBNg81aJErNX7ZbTyINn_FsrOIfZA-cRAftfAgJ6ZUqmdYsBoxoMVWw_fld2T_7ClMsDcL3qUP3adW1r-r_9wueKTI6OPJJu7NcevAQWrMz1Wwd_LZh8po7DCnNY_6XmCKyGRzHc0ROlc922eHs7Lm3kBm3ALjEhJlPvX7weH9jhsg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-01-25\",\r\n    \"dateTo\":\"2022-12-29\",\r\n    \"rptTranId\":404\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/DailyOutStockBillEmailToUser",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "DailyOutStockBillEmailToUser"
              ]
            }
          },
          "response": []
        },
        {
          "name": "BAEmailToUser",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "4oiyAaUoTd8FEgNFz2UywEpaW7JXGyandFKudYkeIdSkVkNShrFh67skD_O4eeVAm8DI07tMw5plb31wWrfh-9A7DJ5cXmmvuUzFdFqErt-FvOXRXkWenKj5Kn6flECwaU3KtGizbbif4I4bPQ1T0md3P7gAyodHlsgpHFRhAPhPsq_y76yvGl3ZcZXu-K7Vu4t3jU6-5IPfTwgCtGIS_zCNBjaqgvlJTQ-EuVtgybiODfRa09KYmL0hvmLmkmhI3g0YA60P4rb7fSNvti_jUPiM38kJwLLLIOGfH1_0Tj8JNJLvn0GnSKSNTZdhx_1tGicMOvcTIUzd-1rr6hjID6NuWaM2_T54z20kTipUhGZYmnj_omGwZcoyxYw44HJhrSAkCaQDgqZPgc7Pp0skNQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-07-16\",\r\n    \"dateTo\":\"2021-03-17\",\r\n    \"r1\":15,\r\n    \"r2\":30,\r\n    \"r3\":45,\r\n    \"r3\":60,\r\n    \"subject\":\"Party Ageing Reports\",\r\n    \"message\":\"This is only for test.\",\r\n    \"toUser\":\"1$admin$sachin@dynamic.net.np\",\r\n    \"cc\":\"sahsachin@live.com\",\r\n    \"bcc\":\"\"\r\n}\r\n",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/BAEmailToUser",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "BAEmailToUser"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PAEmailToAgent",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "MOjjt5YS8mBED99rMrNMLDdvTplIXh1puBcQUAQcIDQFKdhJkVB1yUPl_HZ2fSksLa07YOKJFkgOkI928UIncQSTog3IiGlYmpr3msWxW196_yOf8Dlw9yDRd3EjhWgXRUU-_6u6OeAAeA5PXHuXjl8VJqmJEVqD5JgqZniyI4EYeeLsa10M5Y8jvf3OwU9Cw3F-AUZ2Z8MzjXE6Z0AkBozUQwvGlymiHk46bwGtZpGiy73IWeQP44BDSovqRGcKvXU57Gb_TCb5lMGJPjxip3PKQUWcJcgCimpPZKskC09Korzckkv3fGCnIp0YreTOciGjbjuhK_fm6IwfV-BJ_X3v2nvQEuWVvQH9_zCtNLT0el9xuitUuNXfjOn-8HCp9SYB_7NKyxwwLzbl72z2Na3yuDucTmOrHbZgaC1bzcc",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-07-16\",\r\n    \"dateTo\":\"2022-06-30\",\r\n    \"r1\":15,\r\n    \"r2\":30,\r\n    \"r3\":60\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/PAEmailToAgent",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "PAEmailToAgent"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AutoCompleteProductList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jy5S8FaMp92-Z0mijSYYwgy4RnUtKVaV396FUaNSaIDNU7koinARLtu-_avmvh100OqS-5mHEyGmXn9rbFqkXsDWNl5ovtaSSGarj0JHm5O02E0q8eXra_cuEtQbAhnjFbsco3AUIqG-kw8WYpOQ5DF_RTOBZOVfQD-_x-VtE3P2uVXyFB_2Y0t3fJ0JsWk2F9WAMnA8ukrXt3MWoRuBulDA-dZWxMYG7doA-_ddm4--hhgP804_rgzyOFK8ZsgnsdenKXBTVYqNFZIw4o5dLRhD8S6wykBTaH8OHEoKzNl0M3hhe1M5_KXNfDj5_ql9o11emEfrjKwcPo_Bltx9RIuGlC9vc4-hotvm_VVMmjx7jNrhaJt2N1IwYvy3AglozkGD-F_zXwf4EgW2J15MZJMVMUJ5D4-InZqGIkX1Agg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"searchBy\":1,\r\n    \"searchValue\":\"pree\"     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/AutoCompleteProductList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "AutoCompleteProductList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetGodownForStockDemand",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetGodownForStockDemand",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetGodownForStockDemand"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveProductCategories",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"new Category as SubCategory\",\r\n    \"Alias\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveProductCategories",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveProductCategories"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveProductGroup",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"New Product Group as Category\",\r\n    \"Alias\":\"\",\r\n    \"ParentGroupId\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveProductGroup",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveProductGroup"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveProductCompany",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "jEiFnoPVLK9HLlWHwkza4i5b1Qt5DXH51TRaEbAJUvk8AA0eGqaij_2nzv_vE0cRCLrqKzVVMFH7qYvjLjBHjfVE6cDvt3O05Ej0uBd2tscMobtdM2L7SS0kocGaZeEKNZKPhClCJnXg1bXxuynD6WQD0-Fndf2_os5y_fRcekjEsn2UhNN3cwCFG0jMcHGZEDKiaAJ9_Hf16J5Td8kyiL27PUFSvZbMtEPObRXeIWwUZ3vAd8_WRYvp3mjXXPwe7dbCTraGneM-zHC62mmsnYwENkitbExxFti9UoWwxqlVvKM6TtFop1q4_uH_PRXlfwVrlcCHxOTRBfG8UurODPJHjprGOl_U2iZxzjp4yRJyC_nq3VQKtxFnjAiWkTEakgqeJ7f5xHKnhRYHlSjb0WYp_iZdQ25LG-hX4vwzWJRS9ArlJmUfat86URqYXJ8u",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"New Company as Business \",\r\n    \"Address\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveProductCompany",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveProductCompany"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveUnit",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Ai30IPLvmn10QAhya2QDPxTY78qDr_TBLS-DFjBPuzxvVuQbI3JHuQDC3GwsuDV88oMc4vwIdkonahVWbToEr9umpnqRQMGetVmVmC0IXH88G3Nt4lE15kmcCw9EmgCoTPfjh-zeR-moXikpCnnTo4usQjdHXm-NaoC53DlvpJM0NjPC1D8R-C9ofszBtIW80-vMuu-TwIw2Md3SgMrGy4u8Rn44FhNoRoDTOHLPjgRqdGOjUfm6SD-qDKMP30NJgihWPikbhQNjj_0XKs7ahT2rB93H0fb06Ima1IXxfsUHrcmxMUcwpn2NwLZVxPgHqnrJyECcPCWFlnu4uEsyYbHtfjHUAVAzczXYXYNc4bDEJUvuefl6wmdowyd8amvC",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"Name\":\"test Unit\",\r\n    \"Alias\":\"\",\r\n    \"NoOfDecimalPlaces\":2\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveUnit",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveUnit"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveProduct",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Ai30IPLvmn10QAhya2QDPxTY78qDr_TBLS-DFjBPuzxvVuQbI3JHuQDC3GwsuDV88oMc4vwIdkonahVWbToEr9umpnqRQMGetVmVmC0IXH88G3Nt4lE15kmcCw9EmgCoTPfjh-zeR-moXikpCnnTo4usQjdHXm-NaoC53DlvpJM0NjPC1D8R-C9ofszBtIW80-vMuu-TwIw2Md3SgMrGy4u8Rn44FhNoRoDTOHLPjgRqdGOjUfm6SD-qDKMP30NJgihWPikbhQNjj_0XKs7ahT2rB93H0fb06Ima1IXxfsUHrcmxMUcwpn2NwLZVxPgHqnrJyECcPCWFlnu4uEsyYbHtfjHUAVAzczXYXYNc4bDEJUvuefl6wmdowyd8amvC",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\n    \"Name\":\"test product 11\",\n    \"Alias\":\"\",\n    \"Code\":\"\",\n    \"BaseUnitId\":1,\n    \"ProductGroupId\":1,\n    \"OpeningColl\":[\n\t\t\t{ \"GodownId\":1,\n                        \"Quantity\":5,\n                        \"UnitId\":1,\n                        \"Rate\":50,\n                        \"Amount\":250  }\n\t\t  ],\n    \"CostRateColl\":[\n\t\t\t{\n\t\t\t\t\"Rate\":50,\n\t\t\t\t\"ApplicableFrom\":\"2020-07-25\"\n\t\t\t}\n\t\t   ],\n    \"SellingRateColl\":[\n\t\t\t{\n\t\t\t\t\"Rate\":60,\n\t\t\t\t\"ApplicableFrom\":\"2020-07-25\"\n\t\t\t}\n\t\t   ]\t\t\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveProduct",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveProduct"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveCompetitorSalesRpt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "HAJ2PhUFLeENE7t6sskpg8ULQ_afECsHqzmM0jcUaCFaTqL73ZWEjJS4JAJrC28vpu4XitgQ32avE3IK6W1uLsRsAxeShGt-T5dHWbwf-x3eoDDUWIHnXMGtG0RBXVNVG-XPDtDcE-qddknUxCZ91LQYoufPqWCZv2QHFVTweYx7V_3D5QP1_FtIgkfvBifPFMq5UFikBsCVEjeUP5x3mtlvc78F6Juc3d7us1aoxf-vhzBgTanyUY2cqm8oc0ttBC3jXU0m_c1gNZWmjuDytDTCfVxB0oICUwHm3rg8u_KwrH4pGxJdA62ePKqh0ecZTclJ5jdVWFA_al_Wy58cE2_X-9OgPnTg4Fal01_4TCbflnoE1WJddRg8xjiNAUvEiXkVi0Xl9S6QKSklyjxd5Q",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "[{ \r\n  \"CompanyId\":1,\r\n  \"YearId\":2078,\r\n  \"MonthId\":3,  \r\n  \"ProductName\":409,\r\n \"MRP\":20,\r\n \"ESTDSales\":50,\r\n \"OfficialRate\":16\r\n},\r\n{ \r\n  \"CompanyId\":1,\r\n  \"YearId\":2078,\r\n  \"MonthId\":3,  \r\n  \"ProductName\":408,\r\n \"MRP\":40,\r\n \"ESTDSales\":350,\r\n \"OfficialRate\":28\r\n}\r\n]",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/SaveCompetitorSalesRpt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "SaveCompetitorSalesRpt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompetitorSalesRpt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "HAJ2PhUFLeENE7t6sskpg8ULQ_afECsHqzmM0jcUaCFaTqL73ZWEjJS4JAJrC28vpu4XitgQ32avE3IK6W1uLsRsAxeShGt-T5dHWbwf-x3eoDDUWIHnXMGtG0RBXVNVG-XPDtDcE-qddknUxCZ91LQYoufPqWCZv2QHFVTweYx7V_3D5QP1_FtIgkfvBifPFMq5UFikBsCVEjeUP5x3mtlvc78F6Juc3d7us1aoxf-vhzBgTanyUY2cqm8oc0ttBC3jXU0m_c1gNZWmjuDytDTCfVxB0oICUwHm3rg8u_KwrH4pGxJdA62ePKqh0ecZTclJ5jdVWFA_al_Wy58cE2_X-9OgPnTg4Fal01_4TCbflnoE1WJddRg8xjiNAUvEiXkVi0Xl9S6QKSklyjxd5Q",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"companyId\":1,\r\n    \"yearId\":2078,\r\n    \"monthId\":3    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/GetCompetitorSalesRpt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetCompetitorSalesRpt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompetitorCompany",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "HAJ2PhUFLeENE7t6sskpg8ULQ_afECsHqzmM0jcUaCFaTqL73ZWEjJS4JAJrC28vpu4XitgQ32avE3IK6W1uLsRsAxeShGt-T5dHWbwf-x3eoDDUWIHnXMGtG0RBXVNVG-XPDtDcE-qddknUxCZ91LQYoufPqWCZv2QHFVTweYx7V_3D5QP1_FtIgkfvBifPFMq5UFikBsCVEjeUP5x3mtlvc78F6Juc3d7us1aoxf-vhzBgTanyUY2cqm8oc0ttBC3jXU0m_c1gNZWmjuDytDTCfVxB0oICUwHm3rg8u_KwrH4pGxJdA62ePKqh0ecZTclJ5jdVWFA_al_Wy58cE2_X-9OgPnTg4Fal01_4TCbflnoE1WJddRg8xjiNAUvEiXkVi0Xl9S6QKSklyjxd5Q",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/inventory/GetAllCompetitorCompany",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetAllCompetitorCompany"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompetitorProduct",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "io5y1PNtwpAUm1lkb3BPnNlOIzFcA9IcJ_uTguJE_6KWh-eTgv3E_9OobsmeObQ3ReBFQhwPDwDPD9YwLUGWWFW7-tG8GlGpBJedN2zlvIU90C_smEMamJZD1IhK-PSYBkNQRFrFwaMxcw7fizf0tw6wEaTmFcOsr3hGHmXx0zx1O9SD4Xsvw54OzBYcFoTiqD5uRSlIRotr3JG9mIuS3ntSq6CjEUJmDYGbRUd5trWbtOLJrScKgn_WdlBx3BagnmXzbRW13jA9CEWSnlUDz1GzLYTABHQosoKShdhqpuXCntCePhShag_A21QXaB5z9fJ_DHOix7H0dmcjm29IEs1UNSbH0cIyE2sHSq2N_lmHpL0aB7bGH1IMcIEdW4oOYeXUS226NVVailFzAmojew",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/inventory/GetAllCompetitorProduct",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetAllCompetitorProduct"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveWeeklySalesRpt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "zPNXUAfwKwXooioaYKQSoj8Q3WUNuJj-T50R8_03uo7YG4raTUhcaOsr4KcXwtWCRz3_G9imZ6fHJQ9DVWXhJTYFKcgRNDVjK4p7KlZL1u048COJqBzd36XX6AcQx2yS3qmZ1rQpFe1dX6vwN5hB_qJUzb_hW8YgeUeDUX5sqNz8vL-iVBqdaeP669uJcES4fBCj1H3-NNs2xHOegHglcx4jMtBiHm-S5KY7GkfsECWVhLvzSZ9HaG9drB8f8zm7lq5M29cVqL5541Fgu6HAvLLQh8eOWkpN-pz5st1Gs8aPFvDKGTKaFtEt5p0Eh6ntJYwTk9gzxW-Wxdfv1VZb6BvReCrPoV7JViOiVhjpStsaj-F8IcXQBlPIIGSPa8JZc34xCxIIY97cv9ZXdCsOHwTgHA2f7Ton4Fg-8JtierE",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "[{ \r\n  \"LedgerId\":5674,\r\n  \"YearId\":2078,\r\n  \"MonthId\":3,\r\n  \"WeekId\":1,\r\n  \"ProductName\":665,\r\n \"SalesQty\":2,\r\n \"SalesReturnQty\":4,\r\n \"PurchaseReturnQty\":5,\r\n \"DemageReturnQty\":6,\r\n \"SlowMovingQty\":7,\r\n \"NearExpiryQty\":8,\r\n \"DaysNearExpired\":9\r\n},\r\n{ \r\n  \"LedgerId\":5674,\r\n  \"YearId\":2078,\r\n  \"MonthId\":3,\r\n   \"WeekId\":1,\r\n  \"ProductName\":5360,\r\n  \"SalesQty\":3,\r\n \"SalesReturnQty\":5,\r\n \"PurchaseReturnQty\":6,\r\n \"DemageReturnQty\":4,\r\n \"SlowMovingQty\":2,\r\n \"NearExpiryQty\":1,\r\n \"DaysNearExpired\":6\r\n}\r\n]",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/SaveWeeklySalesRpt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "SaveWeeklySalesRpt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetWeeklySalesRpt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "8kMvbNonHBOtdKxu8otaPgPHJoOdYzm214_KZBOpS9PKBPGmaaIgc2rVeRRwoS7oB27zpmteoqQu3lDYuWKwkwwoLNd2mvv7Yce_nwZm11w5Nld-D8e-cj9xxkz4R_2StJ-arMnmmMNA_O2xgcbVLxP5r5xRqEUrabk0GuSSN4EsfcJkBe_T_OOP-qnUHYPBGkpB2_WNMJYcvOWP_a8n3oXtX8EycrNEitLCwJ-0dKkQ6SEhaomxnWoZ2x9JCeDtLbrH9-mgha1fRr5-9jzcN6pDyTXbLqtSv9QVJbUkIH0r0NmDrZufw12fkH1kxM_7A-5eNeCm0st1aT1zvp-FOLm9wR5zZ9ewWn3Vk_4cG5P8nSjHHpyDlYBtsy2xkdVjw7GE2eLmoAQEQFz0kh4S8O1dAN5FDb1A8uvGybMorNc",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"ledgerId\":5674,\r\n    \"yearId\":2078,\r\n    \"monthId\":3,\r\n    \"weekId\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/GetWeeklySalesRpt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetWeeklySalesRpt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveMonthlyProjection",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "8-AXIxf9Kk66eexvSXIm5UaobuRBmHUn8eT2IwrGFpRLjrY219iANrMfTIzSslxt8KPy5GPXL_5sT_eb8cMVQcBIwetsV3f3RGfju24a1zRp-loNgUBmc2S__CiwwDBBtHc8pQP4H32PA_gFta6qdLm9_1X3RNTKzRtuHUm0NG9TAV_tlP01vshga8JTITjaPvUmbqWW0HP6RZ_EVCw4DNcnycxA-z29J-wu0uuoV6s-8XoLLSER4Uj4qE9vB7SoCrYdtPRB6gUajg-3DMlA5QyzAqBl0-PEt0_4m1TiQU-OQOrTB_-4uIg7ji7Cx15xMTy6We2tSC82BMPRAUwlTktUCGpJVGVkjRKPG4GTgTBIY6D1uxeqOkf48Yt8Ze2Hmc7gikL6q5GSHa6NZyj87WKhJZrb1CRdIhlGa26Mdo8",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "[{ \n  LedgerId:5674,\n  YearId:2078,\n  MonthId:3,\n  ProductName:665,\n  ProjectionQty:50\n},\n{ \n  LedgerId:5674,\n  YearId:2078,\n  MonthId:3,\n  ProductName:5360,\n  ProjectionQty:75\n}\n]",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/SaveMonthlyProjection",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "SaveMonthlyProjection"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetMonthlyProjection",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "9TAj3-0qrumKFVIBsFJuWygBL21MrT5h4XmfUzhQfZngnl1ZCmbiHcXSzNUYW7DTQ6GSjMh8J8w4oFCGkI_klUG9WIS36cEc5SAzeZjfJWwB__ENnDc6oDZxpCjBm8pYEuso-ZvBQE5ZaJ6rFZJUnPeBR6mFCYJOtJy_H3oVGamFJuH4qR0X-K7ux7aPCcNtnhcbZ883od8sGsbbyW8NepSuJmiwkljPXvOjBiA9qoG25_A4CfNYy6Qq64azvWC1S7v2g_fZ493x4vmbKvec8NtKi5OeVAoBE02I-IddFvuWIY9A75wy0WlKjG5Mo0z7o360qwWDe_54DrGEfEZB58-7OwdnxINOrE7WQj-_sMSxlsSP5KusEPBEndJ29tahAo1u4P2NPR7BgDphLt7Wvqnh8116cqkkb6Pw0EC7HzM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"ledgerId\":5674,\r\n    \"yearId\":2078,\r\n    \"monthId\":3\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/GetMonthlyProjection",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetMonthlyProjection"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetProductGroupSummaryAsList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "BTEO3mW39UxdQtnf4xW6T7CCnLS2LDw0VL-WPFi7_k7tzrXPKDAPxJQnBLZ-Z9wEjWQa5EUXJvOkCk9NAWg5OmNv8CVc2QjX4PUzY3aqmZlx7VZbx4WfHgKpXF2ydQxE8GCuxjAcoB3IvYpgZmRjP3V7KyWDMk1WqJTScQCWG9paHb8X8Fc0Fu6QcZI-QYjj-dUAZJ7LAz-bdx3qWag-HwnXbME-v74emrF4L2P3Z7k6OeD1Sr-8Fb2yTi9Rx92HLDZjPbga0s6DRfgGFq2E25Lk5zzZ9OLCYbcLrOiZKbegEsM53uBKUCKJpeMK_IB2BGeuHzodI85aEcy9Xp3kTFOGYhFDonB5k3IGld-c7utLPGhok0W0Fbw6g_dEAbI0QrGtlTGZ5N1ft11xVWXRDw",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-09\",\r\n    \"dateTo\":\"2021-03-09\",\r\n    \"productGroupId\":\"20\",\r\n    \"showAlternetUnit\":\"false\",\r\n    \"voucherIdColl\":\"\",\r\n    \"godownIdColl\":\"\",\r\n    \"includeAditionalCost\":\"false\"\r\n\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetProductGroupSummaryAsList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetProductGroupSummaryAsList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPendingSOSummary",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "mz3rvEuDECuKyfYI_wKFYeibXVNcVn3EWAfuByBHUFqhdtVNJm5ChNFbbiSJT9NdP6LJgMq06Bkpzt49z9OnBa3din98CLR4lm3tVFhujySxv2pgt8ovH9lijIPltjlmg6jyxZ_77f5fUIDMnaRqmHzKo_GQlwwu6F_MqZqA_d-ZabkY-CUyO1IZ_TsS0PyCM1eIv2fFDw3tUHB-V6yWmOgun1C83jH2O3JQIERbtH3wEgH3a-kTyYWUjQ4-8dOzU-XuYN8u8f2J_V6TbO8SOLAXKFhJFgTEFnxbwJhn__aY2st6OiXo_8PlFPDeaC80Z4Ob5m8uH5VdWM8Aa9cNyIUjXbxWM670Y4QWZHI2RLsbWqV9odNurLZGSE4z1_aSk6DQcfyiBKOUBlUCQc9w2A",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-22\",\r\n    \"dateTo\":\"2021-09-21\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetPendingPOSummary",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetPendingPOSummary"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPendingPOSummary",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "mz3rvEuDECuKyfYI_wKFYeibXVNcVn3EWAfuByBHUFqhdtVNJm5ChNFbbiSJT9NdP6LJgMq06Bkpzt49z9OnBa3din98CLR4lm3tVFhujySxv2pgt8ovH9lijIPltjlmg6jyxZ_77f5fUIDMnaRqmHzKo_GQlwwu6F_MqZqA_d-ZabkY-CUyO1IZ_TsS0PyCM1eIv2fFDw3tUHB-V6yWmOgun1C83jH2O3JQIERbtH3wEgH3a-kTyYWUjQ4-8dOzU-XuYN8u8f2J_V6TbO8SOLAXKFhJFgTEFnxbwJhn__aY2st6OiXo_8PlFPDeaC80Z4Ob5m8uH5VdWM8Aa9cNyIUjXbxWM670Y4QWZHI2RLsbWqV9odNurLZGSE4z1_aSk6DQcfyiBKOUBlUCQc9w2A",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-22\",\r\n    \"dateTo\":\"2021-09-21\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetPendingPOSummary",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetPendingPOSummary"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCRLimitExpiredParty",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "mz3rvEuDECuKyfYI_wKFYeibXVNcVn3EWAfuByBHUFqhdtVNJm5ChNFbbiSJT9NdP6LJgMq06Bkpzt49z9OnBa3din98CLR4lm3tVFhujySxv2pgt8ovH9lijIPltjlmg6jyxZ_77f5fUIDMnaRqmHzKo_GQlwwu6F_MqZqA_d-ZabkY-CUyO1IZ_TsS0PyCM1eIv2fFDw3tUHB-V6yWmOgun1C83jH2O3JQIERbtH3wEgH3a-kTyYWUjQ4-8dOzU-XuYN8u8f2J_V6TbO8SOLAXKFhJFgTEFnxbwJhn__aY2st6OiXo_8PlFPDeaC80Z4Ob5m8uH5VdWM8Aa9cNyIUjXbxWM670Y4QWZHI2RLsbWqV9odNurLZGSE4z1_aSk6DQcfyiBKOUBlUCQc9w2A",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-03-22\",\r\n    \"dateTo\":\"2021-09-21\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetCRLimitExpiredParty",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetCRLimitExpiredParty"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPartyAgeing",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "rxGpbrFEtjNK9edo-i4RJXDKVBZw3LNT_dpORU6LxzfT4_ESCQwyaDw1BEHJvPidg8qHWKOi-76ZiHKeRKPIrAG5Fn7Rb1YRSNmy1JdvQ8RZ7Xbh6lh984rGXUiZ9Z3uMWQByz3vBnI0gUCwPIAqLOQWG1NwWxIUcX7yntbzR9eiNG6SLsSuXf3Q8j3qUz6wyBkSaCkJAll2jox4QLr-qu5EDo9TxFwJcFWM09P7y8AEG0bNuXWOraLC3xaX84VbWBlWFFOXROiEUil_h1XKEx4tp7yj56ECGQCBigQX3_3FKfgOSu-w5MMbDJwsXlJoFvJZ-Uo4PgvnqcBrE7wCDOYHDCUH30B2wlg5ZFusBPI2DiWaXITO4ud_h5Oz_mQ3c6ZR2cgDSri8TiufeX1a1XFL7tIlfEUR7txdEAE9UZog4_cthpwbYLmtjlh_K0mU",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"ledgerGroupId\":12,\r\n    \"dayRange\":\"60,90,120\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetPartyAgeing",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetPartyAgeing"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ProductVoucher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "NF5Ugd5B-er78kp61hw3FGRD3M1Fe0rTjlEAWOWOlZ-MX6hWoV13t_JmfMfb580Q0rcvqmVH7S2K2BejHkKrt2l0K7Bkf84-v6ntagrK8jhnXm_LRw5jiOPtOrpEoA-zCzjGeSAUjSS_1Wm6CBQ36pfF-yUx_0xBHPN_hjMhMxRxY2y7Ov2330DIBplmdTcyebHks6DUPAK4VF6mlciIActJRnSAChDG5GgTBi_FaP5Kch5jTpRYX1-0yrjIjMpBj9m3AxwIYmYBYX1BmQgsaVUENdBLy5XO_b2T4J7ovvOwpYQfRA69rw-epKIg8gkHKZ1sGx0BjN0sw8lAg1rr3xnBPKtxpzuk_LKKJAp8qYy1byuc1pb2hi0FsG3t0gvFraocQhrdREs3TSoPxfE5iQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"productId\":15748,\r\n    \"dateFrom\":\"2021-02-24\",\r\n    \"dateTo\":\"2021-02-24\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetProductVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetProductVoucher"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ProductDetails",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "3mUdQACGIHGtq0AZ-gyx6ZXkx9at0e24DJElM0XAs_9tZQioCSj7XZvUV17FL8NeECOR05pst15HaGNcEJuOWmGJTgxg1iTvDsigAG-sHWOoLqNBU5GpZvTTos--1hvq9c_Mc9jl3MMKcrnKmPE4SSYqhVMqa74OQ3K_rgnbiuA31YTEZmQIlN4v__hznbrGOxEcWJlI8QbVrrZhSN8j7bj6wSywOaskchJh1dLrzpntPXTCpsWwn9XS-oht_UXD93UznDclTGnb6sRDd_W_TTBZwTnmCKUkKad7CnzVGIaJiSt0y_8vjkRXgMM8buhg2Bh9tLdSFJiZUyyG30Sw4Af1C1nNm4eFGrrLSnTsqxo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"productId\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/GetProductDetail",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetProductDetail"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ProductCurrentStauts",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "BlO0lTx7E_Rywr3xb7LEL8cUS7XDlVkiGn360ODsqkgM26M8zqg9y2C9cfuPdnkk79QemSy-vUu5BzxrJWpdKiqZNv42CjKp6yWiU8wLMuQbW1bedLLDpj9QIjVSH1DOTCVB_AIXtx8x1EQV_LvcS90VoYt5zlooqRlYz7FRMZ87gpCBzdpsbdSlP7fpRyaIz76qDSOp11S_aMgpRNxcXKQBULq6DsbteIJoR4gOeQllkyTL7BBRp9H95UxSmaGbAiHqdfR8IxPyfDle2prFEEshrHKHjE1XKzCOGP5hIVLf0S_Z9jd2xhkgEcRn1pv0X6LuGZIvUWuysBFQOP-lcMb_WvisylVBYMAQWKlnrdM",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"productId\":5748\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetProductCurrentStatus",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetProductCurrentStatus"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetProductGroupList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "W_lwGmY1S6c-efboQO7yE_LISxYqh_iGkFkrg0nx0dFrLhp0ZWYC0K2H2f0HaqJhvcJDLvoDRVQjAboefIWWYtUkvliWcoiWvcBTz97XHZWuYDILs6Z_bW1kwLX-AukGmyrSIh_coP2DEBTeSBFXM_rkkfNani-Pie_n4MBDrbzFN-P6XWkEOmfOL6GS72RGUtTrOMXHEDifOgEd1JMAos9Nn5xvZdknWrP_nidpwfbpOsx1MM_2NlKy6w5UBhF8ws7rm2sz5r3lxxWWKzHaJBQFfakc2qT_begD5W3MzYtkpQJ8AM0zXTvUUn4x46_F3G_TfEkKLfu8c20PbhSJ7sISCSMjqTvek1l3VK-2MVQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetProductGroupList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetProductGroupList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetProductBrandList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "W_lwGmY1S6c-efboQO7yE_LISxYqh_iGkFkrg0nx0dFrLhp0ZWYC0K2H2f0HaqJhvcJDLvoDRVQjAboefIWWYtUkvliWcoiWvcBTz97XHZWuYDILs6Z_bW1kwLX-AukGmyrSIh_coP2DEBTeSBFXM_rkkfNani-Pie_n4MBDrbzFN-P6XWkEOmfOL6GS72RGUtTrOMXHEDifOgEd1JMAos9Nn5xvZdknWrP_nidpwfbpOsx1MM_2NlKy6w5UBhF8ws7rm2sz5r3lxxWWKzHaJBQFfakc2qT_begD5W3MzYtkpQJ8AM0zXTvUUn4x46_F3G_TfEkKLfu8c20PbhSJ7sISCSMjqTvek1l3VK-2MVQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetProductBrandList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetProductBrandList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetProductForAbbreviatedInvoice",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Ax3-K9vkXtNH0Wh6QB_bSLHq97iAMmWK9F1tiQiX1UHP49B1dfT360TsQB7uTFeaCIJQI3aez-Lo06Nx5XHk-wRofr5XVmWB5-Zyo2ikPnjU2vxSWq6ClU1sK4mLwpDk5iMZ_SX4NfQDuMltbaRsEacWQ3789AR1mroTCxAX6HU7Od5uA4MVAgDlpcVrTtKt-rNPW4J8W_MOfoKFkXiuKQ-7JjpIAGGX-DJk6SKWGTGKPqHeZ6x9AqagGlzRPaYW8in6W4TEmjS4C7Nz_CzDbxgkM6ZB3X3gshVBHG17SKrXtJ9FVojxmB6NUjth2LM6oIpVa4Ky4Uy2qKHyYA2I9HCpRHfAbJKUzGFsrYdWvAA-IfdR9LjPo9lpHSxQ7LTqDEZizUAeWmhVWZnds-E_N59zIbtGWZrxw3pfeC_soJs",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"typeOfProduct\":4 \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/inventory/GetProductForAbbreviatedInvoice",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "inventory",
                "GetProductForAbbreviatedInvoice"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SalesInvoiceDetailsMonthly EMail",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"dateTo\":\"2024-03-14\",\r\n    \"dateFrom\":\"2024-03-14\",\r\n    \"rptTranId\":\"1332\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/DailySalesEmailToAgent",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "DailySalesEmailToAgent"
              ]
            }
          },
          "response": []
        },
        {
          "name": "DailySalesEmailToAgentXLSX",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2023-01-21\",\r\n    \"dateTo\":\"2024-08-23\",\r\n    \"toCC\":\"sahsachin@live.com\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/DailySalesEmailToAgentXLSX",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "DailySalesEmailToAgentXLSX"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveStockJournalOpening",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "AfADSoBFEAJK1aQ9nqP3lin7HaEQ3gjeP7iYlyV_DsBfqDoy0rj0dCsFuyvOk6J2I-xfLIkc2eXrC3TyvEJw79ybdmAdhi2i1kjnKKRS5upjZoZt-Dm_SHJLi710VH1NptaLODc1rhEj27iG2WwUblp3MosTBt4ItqAzzx_aS4orQUs6DofgnUXsd4oRG4INK0OytkWfzuMg4bhqlqUSrTc2GCQjqUtW2BFHDzyYZUNk3ui3jpMzGsODvUTfOJr9900MXQa5oTAWZKjpWM8fvjC0R1xFN_tKpvm-4DKY01bLePWurV02wtRi7SQZO6r4UfP3dPtnLkjyjchehkQI-aLhmG6FNPE2x2o6R770TOUKUooDobDWwn4WxJv3i_KHKdG2MqKWekwQIgtoZMBZa5ZUCKBqYHEu8QfAcJPEIokkO9EovHL1V2gpCL-1SYpaSwVJ2VZTMglw0MgcTPtcwA",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\n  \"VoucherDate\": \"2023-04-21\",\n  \"ManualVoucherNO\": \"\",\n  \"VoucherName\": \"02-StockJournal\",\n  \"RefNo\": \"\",\n  \"Narration\": \"\",\n  \"TargetItemColl\": [\n    {\n      \"id\": 1058,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 108,\n      \"ActualQty\": 8762,\n      \"BilledQty\": 8762,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 946296\n    },\n    {\n      \"id\": 1059,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 212,\n      \"ActualQty\": 9587,\n      \"BilledQty\": 9587,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2032444\n    },\n    {\n      \"id\": 1060,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9168,\n      \"BilledQty\": 9168,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 962640\n    },\n    {\n      \"id\": 1061,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 205,\n      \"ActualQty\": 9617,\n      \"BilledQty\": 9617,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1971485\n    },\n    {\n      \"id\": 1062,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 500,\n      \"ActualQty\": 9986,\n      \"BilledQty\": 9986,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 4993000\n    },\n    {\n      \"id\": 1063,\n      \"ProductName\": \"HALDIRAM BANANA CHIPS 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 191,\n      \"ActualQty\": 9965,\n      \"BilledQty\": 9965,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1903315\n    },\n    {\n      \"id\": 1064,\n      \"ProductName\": \"HALDIRAM BHELPURI 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 999900\n    },\n    {\n      \"id\": 1065,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 110,\n      \"ActualQty\": 8862,\n      \"BilledQty\": 8862,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 974820\n    },\n    {\n      \"id\": 1066,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 211,\n      \"ActualQty\": 9575,\n      \"BilledQty\": 9575,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2020325\n    },\n    {\n      \"id\": 1067,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 547,\n      \"ActualQty\": 9968,\n      \"BilledQty\": 9968,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 5452496\n    },\n    {\n      \"id\": 1068,\n      \"ProductName\": \"HALDIRAM BHUJIA PLAIN 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 110,\n      \"ActualQty\": 9360,\n      \"BilledQty\": 9360,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1029600\n    },\n    {\n      \"id\": 1069,\n      \"ProductName\": \"HALDIRAM BHUJIA PLAIN 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 211,\n      \"ActualQty\": 9663,\n      \"BilledQty\": 9663,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2038893\n    },\n    {\n      \"id\": 1070,\n      \"ProductName\": \"HALDIRAM BHUJIA PLAIN 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 547,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 5463983\n    },\n    {\n      \"id\": 1071,\n      \"ProductName\": \"HALDIRAM BOMBAY MIXTURE 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049895\n    },\n    {\n      \"id\": 1072,\n      \"ProductName\": \"HALDIRAM BOONDI MASALA 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049895\n    },\n    {\n      \"id\": 1073,\n      \"ProductName\": \"HALDIRAM BOONDI PLAIN 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049895\n    },\n    {\n      \"id\": 1074,\n      \"ProductName\": \"HALDIRAM CHAIPURI 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139886\n    },\n    {\n      \"id\": 1075,\n      \"ProductName\": \"HALDIRAM CHANA CRACKER 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 118,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1179882\n    },\n    {\n      \"id\": 1076,\n      \"ProductName\": \"HALDIRAM CHANA DAL 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9991,\n      \"BilledQty\": 9991,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049055\n    },\n    {\n      \"id\": 1077,\n      \"ProductName\": \"HALDIRAM CHANA GOR GARAM 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9993,\n      \"BilledQty\": 9993,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139202\n    },\n    {\n      \"id\": 1078,\n      \"ProductName\": \"HALDIRAM CHOKOLI 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139886\n    },\n    {\n      \"id\": 1079,\n      \"ProductName\": \"HALDIRAM CONFLAKES MIX. 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 336,\n      \"ActualQty\": 9979,\n      \"BilledQty\": 9979,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3352944\n    },\n    {\n      \"id\": 1080,\n      \"ProductName\": \"HALDIRAM CONFLAKES MIX 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 170,\n      \"ActualQty\": 9972,\n      \"BilledQty\": 9972,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1695240\n    },\n    {\n      \"id\": 1081,\n      \"ProductName\": \"HALDIRAM CRAZY MIXTURES 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 182,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1819818\n    },\n    {\n      \"id\": 1082,\n      \"ProductName\": \"HALDIRAM DALBIJI 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049895\n    },\n    {\n      \"id\": 1083,\n      \"ProductName\": \"HALDIRAM DALBIJI 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 205,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2049795\n    },\n    {\n      \"id\": 1084,\n      \"ProductName\": \"HALDIRAM DIET MIXTURES 150GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 9996,\n      \"BilledQty\": 9996,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 819672\n    },\n    {\n      \"id\": 1085,\n      \"ProductName\": \"HALDIRAM DIET ROASTED POHA 150 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 819918\n    },\n    {\n      \"id\": 1086,\n      \"ProductName\": \"HALDIRAM GUPSHUP 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9969,\n      \"BilledQty\": 9969,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1136466\n    },\n    {\n      \"id\": 1087,\n      \"ProductName\": \"HALDIRAM KACHORI 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139886\n    },\n    {\n      \"id\": 1088,\n      \"ProductName\": \"HALDIRAM KAJU MIX. 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 195,\n      \"ActualQty\": 9852,\n      \"BilledQty\": 9852,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1921140\n    },\n    {\n      \"id\": 1089,\n      \"ProductName\": \"HALDIRAM KAJU MIX.400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 388,\n      \"ActualQty\": 9966,\n      \"BilledQty\": 9966,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3866808\n    },\n    {\n      \"id\": 1090,\n      \"ProductName\": \"HALDIRAM KASMIRI MIX 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 182,\n      \"ActualQty\": 9943,\n      \"BilledQty\": 9943,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1809626\n    },\n    {\n      \"id\": 1091,\n      \"ProductName\": \"HALDIRAM KASMIRI MIX 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 364,\n      \"ActualQty\": 9986,\n      \"BilledQty\": 9986,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3634904\n    },\n    {\n      \"id\": 1092,\n      \"ProductName\": \"HALDIRAM KHATTA MEETHA 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 101,\n      \"ActualQty\": 9270,\n      \"BilledQty\": 9270,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 936270\n    },\n    {\n      \"id\": 1093,\n      \"ProductName\": \"HALDIRAM KHATTA MEETHA 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 195,\n      \"ActualQty\": 9691,\n      \"BilledQty\": 9691,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1889745\n    },\n    {\n      \"id\": 1094,\n      \"ProductName\": \"HALDIRAM KHATTA MEETHA 1KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 547,\n      \"ActualQty\": 9993,\n      \"BilledQty\": 9993,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 5466171\n    },\n    {\n      \"id\": 1095,\n      \"ProductName\": \"HALDIRAM MATHARI 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139886\n    },\n    {\n      \"id\": 1096,\n      \"ProductName\": \"HALDIRAM MOONG DAL 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 116,\n      \"ActualQty\": 7532,\n      \"BilledQty\": 7532,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 873712\n    },\n    {\n      \"id\": 1097,\n      \"ProductName\": \"HALDIRAM MOONG DAL 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 220,\n      \"ActualQty\": 9215,\n      \"BilledQty\": 9215,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2027300\n    },\n    {\n      \"id\": 1098,\n      \"ProductName\": \"HALDIRAM MOONG DAL 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 573,\n      \"ActualQty\": 9975,\n      \"BilledQty\": 9975,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 5715675\n    },\n    {\n      \"id\": 1099,\n      \"ProductName\": \"HALDIRAM NAVARATTAN 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 101,\n      \"ActualQty\": 8618,\n      \"BilledQty\": 8618,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 870418\n    },\n    {\n      \"id\": 1100,\n      \"ProductName\": \"HALDIRAM NAVARATTAN 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 195,\n      \"ActualQty\": 9579,\n      \"BilledQty\": 9579,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1867905\n    },\n    {\n      \"id\": 1101,\n      \"ProductName\": \"HALDIRAM NAVARATTAN 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 498,\n      \"ActualQty\": 9979,\n      \"BilledQty\": 9979,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 4969542\n    },\n    {\n      \"id\": 1102,\n      \"ProductName\": \"HALDIRAM NUT CRACKER 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 118,\n      \"ActualQty\": 9821,\n      \"BilledQty\": 9821,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1158878\n    },\n    {\n      \"id\": 1103,\n      \"ProductName\": \"HALDIRAM NUT CRACKER 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 218,\n      \"ActualQty\": 9927,\n      \"BilledQty\": 9927,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2164086\n    },\n    {\n      \"id\": 1104,\n      \"ProductName\": \"HALDIRAM PANCHARATNA 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 223,\n      \"ActualQty\": 9930,\n      \"BilledQty\": 9930,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2214390\n    },\n    {\n      \"id\": 1105,\n      \"ProductName\": \"HALDIRAM PANCHARATNA 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 441,\n      \"ActualQty\": 9961,\n      \"BilledQty\": 9961,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 4392801\n    },\n    {\n      \"id\": 1106,\n      \"ProductName\": \"HALDIRAM PEANUTS SALTED 360GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 218,\n      \"ActualQty\": 9970,\n      \"BilledQty\": 9970,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2173460\n    },\n    {\n      \"id\": 1107,\n      \"ProductName\": \"HALDIRAM PEANUTS SALTED 180GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 8921,\n      \"BilledQty\": 8921,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1016994\n    },\n    {\n      \"id\": 1108,\n      \"ProductName\": \"HALDIRAM PUNJABI TADKA 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 8936,\n      \"BilledQty\": 8936,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 732752\n    },\n    {\n      \"id\": 1109,\n      \"ProductName\": \"HALDIRAM SAMOSA 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9966,\n      \"BilledQty\": 9966,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1136124\n    },\n    {\n      \"id\": 1110,\n      \"ProductName\": \"HALDIRAM SATTU 400 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1139886\n    },\n    {\n      \"id\": 1111,\n      \"ProductName\": \"HALDIRAM SOYA STIX 150GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 9980,\n      \"BilledQty\": 9980,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 818360\n    },\n    {\n      \"id\": 1112,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BOURBON CREAM 130GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1113,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTER BITE 185 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1114,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTER BITE 45 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4564,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1115,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTER BITE (CASHEW) 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 86,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1116,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTER DELIGHT 160 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1117,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERBITE PISTA 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 86,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1118,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERDELITE 100GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1119,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERLITE JEERA 100 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23.49,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1120,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERLITE JEERA 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1121,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERMILK 200GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1122,\n      \"ProductName\": \"PRIYAGOLD BISCUIT BUTTERMILK100GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23.49,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1123,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CHEESE BITE 150 GM(JAR)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1124,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CHEESE CRACKER 160 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1125,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CHEESE CRACKER 100 GM N\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1126,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CHOCO CHEKKER 90 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 27,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1127,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CHOCO CHEKKER 160 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1128,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CLASSIC CREAM 100 GM (ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23.49,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1129,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CNC 45 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 9,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1130,\n      \"ProductName\": \"PRIYAGOLD BISCUIT CNC 90 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 23,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1131,\n      \"ProductName\": \"PRIYAGOLD BISCUIT DIGESTIVE 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 114,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1132,\n      \"ProductName\": \"PRIYAGOLD BISCUIT MARIE LITE 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 55,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1133,\n      \"ProductName\": \"PRIYAGOLD BISCUIT MARIE LITE 45 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 11,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1134,\n      \"ProductName\": \"PRIYAGOLD BISCUIT MARIE LITE 450GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 136,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1135,\n      \"ProductName\": \"PRIYAGOLD BISCUIT MARIE LITE 300GM N\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1136,\n      \"ProductName\": \"PRIYAGOLD BISCUIT SNACK ZIGZAG 45 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 9,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1137,\n      \"ProductName\": \"PRIYAGOLD BISCUIT SNACK ZIGZAG 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 65,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1138,\n      \"ProductName\": \"PRIYAGOLD BISCUIT SNACK ZIGZAG 450 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1139,\n      \"ProductName\": \"PRIYAGOLD BISCUITS CLASSIC CREAM 43 GM -ELAICHI\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4564,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1140,\n      \"ProductName\": \"PRIYAGOLD BISCUITS CLASSIC CREAM 43 GM-CHOCOLATE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4564,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1141,\n      \"ProductName\": \"PRIYAGOLD BISCUITS CLASSICCREAM 43 GM-ORANGE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4564,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1142,\n      \"ProductName\": \"PRIYAGOLD CHIPS MAMBO CHIPOTALI 50 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 41.3424,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1143,\n      \"ProductName\": \"PRIYAGOLD CHIPS MAMBO CREAM & ONION 50 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 41.3424,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1144,\n      \"ProductName\": \"PRIYAGOLD CHIPS MAMBO PERI PERI 50 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 41.3424,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1145,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE CHOCOGOLD 14 GM(12 BOX)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1146,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE HUNGER 24 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1147,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE HUNK 20 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1148,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE HUNK 20 GM-POUCH\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1149,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE HUNK 400GM POUCH\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 291.276,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1150,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE KICKKER WAFER 25GM-(CHOCOLATE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1151,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE KICKKER WAFER 25GM-(ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1152,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE KICKKER WAFER 25GM-(STRAWBERRY)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1153,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE SHOKK CANDY 4GM POUCH\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 70.47,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1154,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE SNAKKER 24GM (24BOX)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1155,\n      \"ProductName\": \"PRIYAGOLD CHOCOLATE SNAKKER WAFER 300GM POUCH\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7.5168,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1156,\n      \"ProductName\": \"P.GOLD CHOCOLATE SNAKKER CANDY 4GM COFFEE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 70.47,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1157,\n      \"ProductName\": \"P.GOLD CHOCOLATE TOFFITO CANDY 4GM-CARAMEL\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 70.47,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1158,\n      \"ProductName\": \"P.GOLD CHOCOLATE TOFFITO CANDY 4GM-MILKMANGO\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 70.47,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1159,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES 100 GM-BUTTER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1160,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES 100 GM-CHOCOLATE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1161,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES 100 GM-COCONUT\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46.98,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1162,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES 150GM-BUTTER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 68.5908,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1163,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES 150GM-CHOCOLATE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 68.5908,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1164,\n      \"ProductName\": \"PRIYAGOLD ITALIANO COOKIES150GM-COCONUT\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 68.5908,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1165,\n      \"ProductName\": \"PRIYAGOLD JUICE APPLE FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1166,\n      \"ProductName\": \"PRIYAGOLD JUICE GUAVA FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1167,\n      \"ProductName\": \"PRIYAGOLD JUICE LITCHI FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1168,\n      \"ProductName\": \"PRIYAGOLD JUICE MIX FRUIT 100% FRESHGOLD 1000ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1169,\n      \"ProductName\": \"PRIYAGOLD JUICE MIX FRUIT FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1170,\n      \"ProductName\": \"PRIYAGOLD JUICE ORANGE FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1171,\n      \"ProductName\": \"PRIYAGOLD JUICE POMEGRANATE FRESHGOLD 1000 ML\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 183.222,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1172,\n      \"ProductName\": \"PRIYAGOLD MAGIC CAKE 150 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 63.8928,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1173,\n      \"ProductName\": \"PRIYAGOLD MAGIC CAKE 75 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 29.1276,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1174,\n      \"ProductName\": \"HALDIRAM CHIPS SOURCREAM & ONION 60.5 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 47.6727,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 476679.3273\n    },\n    {\n      \"id\": 1175,\n      \"ProductName\": \"HALDIRAM CHIPS TANGY TOMATO 42.5 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 40,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 399960\n    },\n    {\n      \"id\": 1176,\n      \"ProductName\": \"HALDIRAM MEXILLA MEXICAN NACHO CHEESE 55GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 9661,\n      \"BilledQty\": 9661,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 521694\n    },\n    {\n      \"id\": 1177,\n      \"ProductName\": \"HALDIRAM MEXILLA MEXICAN SWEET THIS CHILLY 55GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 9317,\n      \"BilledQty\": 9317,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 503118\n    },\n    {\n      \"id\": 1178,\n      \"ProductName\": \"HALDIRAM MEXILLA MEXICAN TOTMATO 55GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 9697,\n      \"BilledQty\": 9697,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 523638\n    },\n    {\n      \"id\": 1179,\n      \"ProductName\": \"HALDIRAM SNAC LITE FINGER 48 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1180,\n      \"ProductName\": \"HALDIRAM SNAC LITE FRIES 65 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 539946\n    },\n    {\n      \"id\": 1181,\n      \"ProductName\": \"HALDIRAM TAKAKTAK TANGY TOMATO 100GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 54,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 539946\n    },\n    {\n      \"id\": 1182,\n      \"ProductName\": \"FULLO BLASTO STICK WAFER CHOCOLATE 18GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1183,\n      \"ProductName\": \"ARAN BOX JAR ASSORTED PACK 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 700,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1184,\n      \"ProductName\": \"LIMEDO CHOCOLATE ASSORTED 400 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 272,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1185,\n      \"ProductName\": \"LIMEDO CHOCOLATE ROUND TIN (COCONUT) 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1186,\n      \"ProductName\": \"LIMEDO CHOCOLATE ROUND TIN (COFFEE) 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1187,\n      \"ProductName\": \"ARAN POUCH ASSORTED PACK 400 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 318.18,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1188,\n      \"ProductName\": \"ARAN POUCH ASSORTED PACK 1000 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 864,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1189,\n      \"ProductName\": \"FULLO STICK WAFER CHOCO VANILLA 11GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1190,\n      \"ProductName\": \"FULLO STICK WAFER VANILLA 11GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 7,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1191,\n      \"ProductName\": \"TANGO WAFER 115GM CHOCLATE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 187,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1192,\n      \"ProductName\": \"TANGO WAFER 115GM VANILLA\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 187,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1193,\n      \"ProductName\": \"TANGO WAFER 176GM CHOCLATE\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 234,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1194,\n      \"ProductName\": \"TANGO WAFER 176GM VANILLA\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 234,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1195,\n      \"ProductName\": \"RASNA BRAND HONEY 250 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 136,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1196,\n      \"ProductName\": \"RASNA BRAND HONEY 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1197,\n      \"ProductName\": \"RASNA FRUIT PLUS 400 GM (LEMON)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 209.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1198,\n      \"ProductName\": \"RASNA FRUIT PLUS 400 GM (MANGO)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 209.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1199,\n      \"ProductName\": \"RASNA FRUIT PLUS 400 GM (ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 209.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1200,\n      \"ProductName\": \"RASNA FRUIT PLUS 400 GM (PINEAPPLE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 209.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1201,\n      \"ProductName\": \"RASNA FRUIZY 9 GM (MANGO)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1202,\n      \"ProductName\": \"RASNA FRUIZY 9 GM (ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1203,\n      \"ProductName\": \"RASNA GO FRUIT 5 GM (MANGO)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1204,\n      \"ProductName\": \"RASNA GO FRUIT 5 GM (ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1205,\n      \"ProductName\": \"RASNA HONEY VITA 500 GM JAR (CHOCOLATE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 309,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1206,\n      \"ProductName\": \"RASNA 1 KG (LEMON)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 513.64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1207,\n      \"ProductName\": \"RASNA 1 KG (MANGO)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 513.64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1208,\n      \"ProductName\": \"RASNA 1 KG (ORANGE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 513.64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1209,\n      \"ProductName\": \"RASNA 1 KG (PINEAPPLE)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 513.64,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1210,\n      \"ProductName\": \"NESPERS CHOCO FLAKES1.2KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 695.652,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1211,\n      \"ProductName\": \"NESPERS CHOCO FLAKES 26 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1212,\n      \"ProductName\": \"NESPERS CHOCO FLAKES BIB 375 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 278.261,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1213,\n      \"ProductName\": \"NESPERS CORN FLAKES 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 173.913,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1214,\n      \"ProductName\": \"NESPERS CORN FLAKES ATC 475 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 278.261,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1215,\n      \"ProductName\": \"CORN FLAKES 1.1KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 521.739,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1216,\n      \"ProductName\": \"NESPERS OATS ATC 450 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 165.217,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1217,\n      \"ProductName\": \"NESPERS TAICHIN CHIURA 400\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 42.5,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1218,\n      \"ProductName\": \"NESPERS TAICHIN CHIURA 800\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1219,\n      \"ProductName\": \"HALDIRAM SADA PAPAD 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 8535,\n      \"BilledQty\": 8535,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 853500\n    },\n    {\n      \"id\": 1220,\n      \"ProductName\": \"HALDIRAM SADA PAPAD 360 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9987,\n      \"BilledQty\": 9987,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1997400\n    },\n    {\n      \"id\": 1221,\n      \"ProductName\": \"HALDIRAM JAVITIRI PAPAD 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 9978,\n      \"BilledQty\": 9978,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 997800\n    },\n    {\n      \"id\": 1222,\n      \"ProductName\": \"HALDIRAM PUNJABI PAPAD 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 8536,\n      \"BilledQty\": 8536,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 853600\n    },\n    {\n      \"id\": 1223,\n      \"ProductName\": \"HALDIRAM PUNJABI PAPAD 360 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1999800\n    },\n    {\n      \"id\": 1224,\n      \"ProductName\": \"HALDIRAM MEDIUM PAPAD 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 10160,\n      \"BilledQty\": 10160,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1016000\n    },\n    {\n      \"id\": 1225,\n      \"ProductName\": \"HALDIRAM MEDIUM PAPAD 360 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1999800\n    },\n    {\n      \"id\": 1226,\n      \"ProductName\": \"HALDIRAM AAJ SPECIAL PAPAD 180 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 999900\n    },\n    {\n      \"id\": 1227,\n      \"ProductName\": \"HALDIRAM AAJ SPECIAL PAPAD 360 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1999800\n    },\n    {\n      \"id\": 1228,\n      \"ProductName\": \"HALDIRAM JEERA PAPAD 180 GMS\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 10047,\n      \"BilledQty\": 10047,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1004700\n    },\n    {\n      \"id\": 1229,\n      \"ProductName\": \"HALDIRAM CHANA PAPAD 180 GMS\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 999900\n    },\n    {\n      \"id\": 1230,\n      \"ProductName\": \"HALDIRAM MIRCH MASALA PAPAD 180 GMS\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100,\n      \"ActualQty\": 9993,\n      \"BilledQty\": 9993,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 999300\n    },\n    {\n      \"id\": 1231,\n      \"ProductName\": \"HALDIRAM MIRCH MASALA PAPAD 360 GMS\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1999800\n    },\n    {\n      \"id\": 1232,\n      \"ProductName\": \"HALDIRAM G. CHILLY PICKLE 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9983,\n      \"BilledQty\": 9983,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1996600\n    },\n    {\n      \"id\": 1233,\n      \"ProductName\": \"HALDIRAM LEMON PICKLE 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9976,\n      \"BilledQty\": 9976,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1995200\n    },\n    {\n      \"id\": 1234,\n      \"ProductName\": \"HALDIRAM MANGO PICKLE 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9944,\n      \"BilledQty\": 9944,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1988800\n    },\n    {\n      \"id\": 1235,\n      \"ProductName\": \"HALDIRAM MIX PICKLE 400GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 200,\n      \"ActualQty\": 9930,\n      \"BilledQty\": 9930,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1986000\n    },\n    {\n      \"id\": 1236,\n      \"ProductName\": \"PREMIO LITE SUNFLOWER OIL 1.8 LTR\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 704,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1237,\n      \"ProductName\": \"PREMIO LITE SUNFLOWER OIL 5 LTR\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 1945,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1238,\n      \"ProductName\": \"HALDIRAM ALOO PADAK\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 148.969,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1489541.031\n    },\n    {\n      \"id\": 1239,\n      \"ProductName\": \"HALDIRAM ALOO MUTTER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 165,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1649835\n    },\n    {\n      \"id\": 1240,\n      \"ProductName\": \"HALDIRAM DAL MAKHANI\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 187,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1869813\n    },\n    {\n      \"id\": 1241,\n      \"ProductName\": \"HALDIRAM KASHMIRI DUM ALOO\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 165,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1649835\n    },\n    {\n      \"id\": 1242,\n      \"ProductName\": \"HALDIRAM KHADHAI PANEER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2639736\n    },\n    {\n      \"id\": 1243,\n      \"ProductName\": \"HALDIRAM LAJAWAB MUTTER PANEER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2639736\n    },\n    {\n      \"id\": 1244,\n      \"ProductName\": \"HALDIRAM NAVARATTAN MIX VEG.\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 165,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1649835\n    },\n    {\n      \"id\": 1245,\n      \"ProductName\": \"HALDIRAM NAWABI PALAK PANEER\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 264,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 2639736\n    },\n    {\n      \"id\": 1246,\n      \"ProductName\": \"HALDIRAM PUNJABI SARSO DA SAG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 165,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1649835\n    },\n    {\n      \"id\": 1247,\n      \"ProductName\": \"HALDIRAM RAJMA RASHILA\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 154,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1539846\n    },\n    {\n      \"id\": 1248,\n      \"ProductName\": \"HALDIRAM RUSK 200 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 82,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 819918\n    },\n    {\n      \"id\": 1249,\n      \"ProductName\": \"HALDIRAM RUSK 300 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 105,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1049895\n    },\n    {\n      \"id\": 1250,\n      \"ProductName\": \"HALDIRAM YELLOW DAL TADKA\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 154,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1539846\n    },\n    {\n      \"id\": 1251,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 11999,\n      \"BilledQty\": 11999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 100791.6\n    },\n    {\n      \"id\": 1252,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 7388,\n      \"BilledQty\": 7388,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 125596\n    },\n    {\n      \"id\": 1253,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 8561,\n      \"BilledQty\": 8561,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 71912.40000000001\n    },\n    {\n      \"id\": 1254,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9621,\n      \"BilledQty\": 9621,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 163557\n    },\n    {\n      \"id\": 1255,\n      \"ProductName\": \"HALDIRAM ALOO BHUJIA 90GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 459954\n    },\n    {\n      \"id\": 1256,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 6579,\n      \"BilledQty\": 6579,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 55263.600000000006\n    },\n    {\n      \"id\": 1257,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 4523,\n      \"BilledQty\": 4523,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 76891\n    },\n    {\n      \"id\": 1258,\n      \"ProductName\": \"HALDIRAM BHUJIA MASALA 90GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 459494\n    },\n    {\n      \"id\": 1259,\n      \"ProductName\": \"HALDIRAM CHANA CHUR 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169983\n    },\n    {\n      \"id\": 1260,\n      \"ProductName\": \"HALDIRAM CHANA CRACKER 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 9659,\n      \"BilledQty\": 9659,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 81135.6\n    },\n    {\n      \"id\": 1261,\n      \"ProductName\": \"HALDIRAM CHANA FATAKA 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169813\n    },\n    {\n      \"id\": 1262,\n      \"ProductName\": \"HALDIRAM CHATPATA MIXTURES 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 83991.6\n    },\n    {\n      \"id\": 1263,\n      \"ProductName\": \"HALDIRAM CHATPATA MIXTURES 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169983\n    },\n    {\n      \"id\": 1264,\n      \"ProductName\": \"HALDIRAM HEENG JEERA MUTTER 15GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 8039,\n      \"BilledQty\": 8039,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 67527.6\n    },\n    {\n      \"id\": 1265,\n      \"ProductName\": \"HALDIRAM HEENG JEERA PEANUTS 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 9729,\n      \"BilledQty\": 9729,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 81723.6\n    },\n    {\n      \"id\": 1266,\n      \"ProductName\": \"HALDIRAM HEENG JEERA PEANUTS 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169813\n    },\n    {\n      \"id\": 1267,\n      \"ProductName\": \"HALDIRAM KHATTA MEETHA 15GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 10289,\n      \"BilledQty\": 10289,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 86427.6\n    },\n    {\n      \"id\": 1268,\n      \"ProductName\": \"HALDIRAM KHATTA MEETHA 90GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 459954\n    },\n    {\n      \"id\": 1269,\n      \"ProductName\": \"HALDIRAM MOONG DAL 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 7941,\n      \"BilledQty\": 7941,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 66704.40000000001\n    },\n    {\n      \"id\": 1270,\n      \"ProductName\": \"HALDIRAM MOONG DAL 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 10137,\n      \"BilledQty\": 10137,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 172329\n    },\n    {\n      \"id\": 1271,\n      \"ProductName\": \"HALDIRAM MOONG DAL 80 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 459494\n    },\n    {\n      \"id\": 1272,\n      \"ProductName\": \"HALDIRAM NAVARATTAN 15GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 6859,\n      \"BilledQty\": 6859,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 57615.600000000006\n    },\n    {\n      \"id\": 1273,\n      \"ProductName\": \"HALDIRAM NAVARATTAN 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 6439,\n      \"BilledQty\": 6439,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 109463\n    },\n    {\n      \"id\": 1274,\n      \"ProductName\": \"HALDIRAM NAVRATTAN 90 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 46,\n      \"ActualQty\": 9989,\n      \"BilledQty\": 9989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 459494\n    },\n    {\n      \"id\": 1275,\n      \"ProductName\": \"HALDIRAM NUT CRACKER 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 7989,\n      \"BilledQty\": 7989,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 67107.6\n    },\n    {\n      \"id\": 1276,\n      \"ProductName\": \"HALDIRAM NUT CRACKER 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 8411,\n      \"BilledQty\": 8411,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 142987\n    },\n    {\n      \"id\": 1277,\n      \"ProductName\": \"HALDIRAM PEANUTS SALTED 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 7948,\n      \"BilledQty\": 7948,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 66763.2\n    },\n    {\n      \"id\": 1278,\n      \"ProductName\": \"HALDIRAM PEANUTS SALTED 32 GMS\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 4899,\n      \"BilledQty\": 4899,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 83283\n    },\n    {\n      \"id\": 1279,\n      \"ProductName\": \"HALDIRAM PUNJABI TADKA 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 8.4,\n      \"ActualQty\": 8108,\n      \"BilledQty\": 8108,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 68107.2\n    },\n    {\n      \"id\": 1280,\n      \"ProductName\": \"HALDIRAM PUNJABI TADKA 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 7303,\n      \"BilledQty\": 7303,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 124151\n    },\n    {\n      \"id\": 1281,\n      \"ProductName\": \"HALDIRAM SOYA CHIPS 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169983\n    },\n    {\n      \"id\": 1282,\n      \"ProductName\": \"HALDIRAM SOYA STIX 32 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 17,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 169983\n    },\n    {\n      \"id\": 1283,\n      \"ProductName\": \"HALDIRAM SOAN PAPADI 250GM(VEG)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 323,\n      \"ActualQty\": 9944,\n      \"BilledQty\": 9944,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3211912\n    },\n    {\n      \"id\": 1284,\n      \"ProductName\": \"HALDIRAM SOAN PAPADI 500GM (VEG)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 609,\n      \"ActualQty\": 9939,\n      \"BilledQty\": 9939,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 6052851\n    },\n    {\n      \"id\": 1285,\n      \"ProductName\": \"HALDIRAM SOANPAPADI 250GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 323,\n      \"ActualQty\": 9868,\n      \"BilledQty\": 9868,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3187364\n    },\n    {\n      \"id\": 1286,\n      \"ProductName\": \"HALDIRAM SOANPAPADI 500GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 609,\n      \"ActualQty\": 9929,\n      \"BilledQty\": 9929,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 6046761\n    },\n    {\n      \"id\": 1287,\n      \"ProductName\": \"HALDIRAM SOANPAPADI 200GM (VEG)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 205,\n      \"ActualQty\": 8872,\n      \"BilledQty\": 8872,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1818760\n    },\n    {\n      \"id\": 1288,\n      \"ProductName\": \"HALDIRAM GULABJAMUN 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 364,\n      \"ActualQty\": 9881,\n      \"BilledQty\": 9881,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3596684\n    },\n    {\n      \"id\": 1289,\n      \"ProductName\": \"HALDIRAM GULABJAMUN 1KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 682,\n      \"ActualQty\": 9952,\n      \"BilledQty\": 9952,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 6787264\n    },\n    {\n      \"id\": 1290,\n      \"ProductName\": \"HALDIRAM RASGULLA 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 364,\n      \"ActualQty\": 9893,\n      \"BilledQty\": 9893,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3601052\n    },\n    {\n      \"id\": 1291,\n      \"ProductName\": \"HALDIRAM RASGULLA 1KG+250 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 682,\n      \"ActualQty\": 9949,\n      \"BilledQty\": 9949,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 6785218\n    },\n    {\n      \"id\": 1292,\n      \"ProductName\": \"HALDIRAM WHITE RASABARI 500 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 341,\n      \"ActualQty\": 9965,\n      \"BilledQty\": 9965,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 3398065\n    },\n    {\n      \"id\": 1293,\n      \"ProductName\": \"HALDIRAM WHITE RASBARI 1 KG\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 627,\n      \"ActualQty\": 9985,\n      \"BilledQty\": 9985,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 6260595\n    },\n    {\n      \"id\": 1294,\n      \"ProductName\": \"HALDIRAM MACARONI 150GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 26.7182,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 267155.2818\n    },\n    {\n      \"id\": 1295,\n      \"ProductName\": \"HALDIRAM MACARONI 450GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 127,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 1269873\n    },\n    {\n      \"id\": 1296,\n      \"ProductName\": \"HALDIRAM VERMICELLI 115 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 41,\n      \"ActualQty\": 9849,\n      \"BilledQty\": 9849,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 403809\n    },\n    {\n      \"id\": 1297,\n      \"ProductName\": \"HALDIRAM VERMICELLI ROASTED 125 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 41,\n      \"ActualQty\": 9999,\n      \"BilledQty\": 9999,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 409959\n    },\n    {\n      \"id\": 1298,\n      \"ProductName\": \"Rasna Fruit Plus Standy Pouch 400 Gm (Mango)\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 209.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    },\n    {\n      \"id\": 1299,\n      \"ProductName\": \"HALDIRAM CHANA FATAKA 15 GM\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 9.09,\n      \"ActualQty\": 0,\n      \"BilledQty\": 0,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 0\n    }\n  ]\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveStockJournaOpening",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveStockJournaOpening"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Consumption",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "files",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "filesNotInWorkingDirectory": [
                    "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/IMG_20191223_163635[463].jpg"
                  ],
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/IMG_20191223_163635[463].jpg",
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n    \"VoucherName\": \"Consumption\",\n    \"VoucherName\":26,\n    \"Narration\": \"Test Entry\",\n    \"VoucherDate\": \"2026-03-12\",\n    \"PartyLedgerName\": \"\",\n    \"PartyLedgerCode\":0,\n    \"ItemDetailsColl\": [\n        {\n\t    \"ProductName\":3,\n\t    \"CostCenterId\":4,\n            \"ActualQty\": 20,           \n            \"UnitId\": 2,\n            \"Rate\": 200,\n            \"Amount\": 4000,\n\t    \"Batch\": \"45Abc\",\n            \"EXPDate\": \"2023-10-20\",\n            \"MFGDate\": \"2022-04-14\",            \n        }\n    ]     \n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveConsumption",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveConsumption"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SalesReturn",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "files",
                  "type": "file",
                  "src": [
                    "/C:/Users/admin/Desktop/API Value.pptx",
                    "/C:/Users/admin/Desktop/processed.jpeg"
                  ],
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n    \"VoucherName\": \"SalesReturn\",\n    \"RefNo\": 118727429,\n    \"CurrencyName\": \"Rs\",\n    \"CurRate\": 1.00000,\n    \"Narration\": \"\",\n    \"VoucherDate\": \"2023-08-17\",\n    \"PartyLedgerName\": \"225263 - DYNAMIC USER TEST\",\n    \"TotalAmt\": 5457900000,\n    \"Narration\": \"Ret\",\n    \"ItemAllocationColl\": [\n        {\n            \"ProductName\": \"DYNAMIC TEST\",\n            \"ActualQty\": 2000.000,\n            \"BilledQty\": 2000.000,\n            \"UnitName\": \"TH\",\n            \"Rate\": 230000000,\n            \"Amount\": 48300000.00,\n        }\n    ],\n    \"AdditionalCostColl\": [\n        {\n            \n                \"LedgerName\": \"Excise Duty\",\n                \"Rate\": 0.50,\n                \"Amount\": 2300000.00\n            },{\n            \"LedgerName\": \"VAT\",\n            \"Rate\": 13,\n            \"Amount\": 6279000.00\n        }\n    ],\n    \"SalesReturnDetail\": {\n        \"CreditDays\": 0,\n        \"Buyes\": \"225263 - DYNAMIC USER TEST\",\n        \"Address\": \" SEVEN HILLS NP\",\n        \"SalesTaxNo\": 0,\n        \"PhoneNo\": \"\",\n        \"TermsOfDelivery\": \"FCA\",\n        \"Destination\": \"NPFOU\",\n        \"TermsOfPayment\": \"Blocked for Payment (A)\",\n        \"OtherRefereces\": \"\"\n    }\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveSalesReturn",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveSalesReturn"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PurchaseInvoice",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "HN5z4U9t5ayLUf1nIqV8wmuwxKoHO-1TrGbjI9K5IhIUv6y7DW20_CzTajYK66s40cQEi0v3aPo6RYaZVR2UPBR28l250iCCI_ceV7yy9L9v90Dt2vT7fKExIS4SNHK8MwPT1zuqx8bw03OJ8VCqZ1KqA_OvHdOU04B6a3w6LQF-Mnl-CmU8LN5xhbowwffITPolvrMKDe6LJyB7XeCnKlIvF5vjzEhsE_OiOWDKnmkEdiJHzwlzyjgGdqG83XUS6wPIVE5wBNtnZPCqcxY9JFmz0SE33Hr0K5dpmxGASgKSqtNORk6DstTTgv4cYqXa9Z_IvBrtQCJ237nIWTp8uJDNPDzDQcfCuBdxZ9-ockC4FVGNSUb84fytfvUrFnOJC8Om3NlIz55QMr8rvh_uGR2otNO2qLWsZrjI798eZt_7BfQX2ao-_7p93iBrJOgE",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "files",
                  "type": "file",
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/2[467].jpg",
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  \"VoucherDate\": \"2023-04-11\",\n  \"ManualVoucherNO\": \"\",\n  \"VoucherName\": \"KT01-PurchaseInvoice\",\n  \"RefNo\": \"\",\n  \"TotalAmount\": 0,\n  \"Narration\": \"\",\n  \"RefNo\":\"111\",\n  \"PartyLedgerName\": \"Vishwanath Trade House\",\n  \"PurchaseInvoiceDetail\": {\n    \"Buyes\": \"Suppliers\",\n    \"Address\": \"\",\n    \"PhoneNo\": \"\",\n    \"SalesTaxNo\": \"\",\n    \"CreditDays\": \"0\",\n    \"DueDate\": \"\",\n    \"PaymentTermsId\": \"\",\n    \"TermsOfDelivery\": \"\",\n    \"TermsOfPayment\": \"\",\n    \"AdvancePayment\": \"0\",\n    \"FreightRate\": \"0\",\n    \"Notes\": \"\"\n  },\n  \"ItemAllocationColl\": [\n    {\n      \"id\": 1058,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 180GM\",\n      \"GodownName\": \"Main Godown\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 100.58,\n      \"ActualQty\": 1000,\n      \"BilledQty\": 1000,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 100580\n    },\n    {\n      \"id\": 1059,\n      \"ProductName\": \"HALDIRAM ALL IN ONE 360GM TEST\",\n      \"GodownName\": \"Main Godown\",\n      \"UnitName\": \"PCS\",\n      \"Rate\": 1000.58,\n      \"ActualQty\": 600,\n      \"BilledQty\": 600,\n      \"FreeQty\": 0,\n      \"DiscountPer\": 0,\n      \"DiscountAmt\": 0,\n      \"Amount\": 600348\n    },\n  ]\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SavePurchaseInvoice",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SavePurchaseInvoice"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SalesOrder",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "files",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "filesNotInWorkingDirectory": [
                    "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/IMG_20191223_163635[463].jpg"
                  ],
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/IMG_20191223_163635[463].jpg",
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n    \"VoucherName\": \"SalesOrder\",\n    \"AutoVoucherNo\": 1,\n    \"CurRate\": 1,\n    \"Narration\": \"Test Entry\",\n    \"VoucherDate\": \"2024-01-16\",\n    \"AutoManualNo\": \"1\",\n    \"PartyLedgerName\": \"\",\n    \"AgentName\": \"\",\n    \"ItemAllocationColl\": [\n        {\n            \"ProductName\": \"Boilar Kukhura\",\n            \"ActualQty\": 20,\n            \"BilledQty\": 20,\n            \"UnitId\": 2,\n            \"Rate\": 200,\n            \"Amount\": 4000,\n            \"DiscountAmt\": 400,\n            \"DiscountPer\": 10,\n            \"ALUnit1\": \"\",\n            \"ALUnit2\": \"\",\n            \"ALValue1\":0,\n            \"ALValue2\":0 ,\n            \"ItemDetailsColl\": [\n                {\n                    \"ProductName\": \"Boilar Kukhura\",\n                    \"ActualQty\": 20,\n                    \"BilledQty\": 20,\n                    \"UnitId\": 2,\n                    \"Rate\": 200,\n                    \"Amount\": 4000,\n                    \"Batch\": \"45Abc\",\n                    \"EXPDate\": \"2023-10-20\",\n                    \"MFGDate\": \"2022-04-14\",\n                    \"DiscountAmt\": 400,\n                    \"DiscountPer\": 10,\n                    \"ALUnit1\": \"\",\n                    \"ALUnit2\": \"\",\n                    \"ALValue1\":0 ,\n                    \"ALValue2\":0,\n                    \"VatRate\": 13,\n                    \"VatAmount\": 0,\n                    \"VatAbleAmt\": 0,\n                    \"ExDutyRate\": 0,\n                    \"ExDutyAmount\": 0\n                }\n            ],\n            \"VatRate\": 0,\n            \"VatAmount\": 0,\n            \"VatAbleAmt\": 0,\n            \"ExDutyRate\": 0,\n            \"ExDutyAmount\": 0\n        }\n    ],\n    \"AditionalCostColl\": [\n        {\n            \"LedgerName\": \"Freight\",\n            \"AccessableValue\": 0,\n            \"Rate\": 0,\n            \"Amount\": 100\n        },\n        {\n            \"LedgerName\": \"VAT\",\n            \"AccessableValue\": 3700,\n            \"Rate\": 13,\n            \"Amount\": 481\n        },\n        {\n            \"LedgerName\": \"Excise Duty\",\n            \"Rate\": 5,\n            \"Amount\": 1500\n        }\n    ],\n    \"SalesOrderDetail\": {\n        \"CreditDays\": 15,\n        \"Buyes\": \"Ahana Fresh House\",\n        \"Address\": \"Biratnagar\",\n        \"SalesTaxNo\": 0,\n        \"PhoneNo\": \"9817387410\"\n    },\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveSalesOrder",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveSalesOrder"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AbbSalesInvoice",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "GOASxkZlEvlFhAn0UYs2zhXqchyXeYjsoXFBriV7n2UL7QYwh-2NGeLzu6Tm3VNd3UKL793pkfZOdfAdmStfKZSWKwoDT6m5zxYXec6zlW_98eote8gjwdOvzLVuDYrqsLNV1tkTiJA5fhgbDmDLKVMjXCyBjo8I9fcQRzjCpz2dlVg89xozV82dcCPmJYLrQQSlVYfaQuUmJnQadDAwhYryXazrtFaQoQh8gj2R8W-vak5U-_CUgkadkiN6HhEE3bTEui-CR4KdL61PROUlS1ePUtrnoJ7QK1_VBAty4VcgjCltozytp534g3c7jfZEKhXWRA7YNF0qNMYR7VEUPuZOWIOeP_45XmmlCuPT3KB03Qtu_TFbmnFje4KNncF9xaTAH2cXPxFHnFpsHVRGq173i7anEHtys7NzR3Z200E",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{ \n  IsAbbInvoice:true,\n  VoucherDate:'2022-07-03',\n  ManualVoucherNO:'',\n  VoucherName:64,\n  RefNo:'Coupon No.',\n  Narration:'Test Narration',\n  PartyLedgerCode:0,\n  TotalAmount:1000,\n  ItemAllocationColl:\n  [ \n    {\n      ProductName:19,\n      LedgerId:4,\n      UnitId:4,\n      ActualQty:5,\n      BilledQty:5,\n      FreeQty:0,\n      Rate:200,\n      DiscountPer:0,\n      DiscountAmt:0,\n      Amount:1000\n    }   \n  ],\n  SalesInvoiceDetail:{\n\t\t\tBuyes:\"buyers Name\",\n\t\t\tAddress:\"KTM\",\n\t\t\tSalesTaxNo:\"Pan Vat No.\",\n\t\t\tPhoneNo:\"Contact No\",\n\t\t\tGoods:\" Vehicle No\"\n\t\t     } \n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveSalesInvoice",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveSalesInvoice"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SalesInvoice",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "files",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "src": [
                    "/C:/Users/admin/Desktop/API Value.pptx",
                    "/C:/Users/admin/Desktop/processed.jpeg"
                  ],
                  "disabled": true
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n    VoucherDate: '2025-12-23',\n    ManualVoucherNO: '',\n    RefNo: '222',\n    Narration: 'name',\n    PartyLedgerCode: '19085',\n    Address: '',\n    TotalAmount: 0,\n    BranchCode: '24',\n    ItemAllocationColl: [\n      {\n        ProductName: '342',\n        ItemAllocationId: '2938881',\n        ActualQty: '120',\n        Rate: '6.95',\n        Amount: '834',\n        UnitId: '2',\n        DiscountPer: 0,\n        DiscountAmt: 0\n      },\n      {\n        ProductName: '339',\n        ItemAllocationId: '2938883',\n        ActualQty: '50',\n        Rate: '6.95',\n        Amount: '347.5',\n        UnitId: '2',\n        DiscountPer: 0,\n        DiscountAmt: 0\n      },\n      {\n        ProductName: '340',\n        ItemAllocationId: '2938884',\n        ActualQty: '50',\n        Rate: '6.9',\n        Amount: '345',\n        UnitId: '2',\n        DiscountPer: 0,\n        DiscountAmt: 0\n      }\n    ],\n    AditionalCostColl: [\n      { LedgerId: 7, Amount: 0, Rate: 0, Naration: 'DISCOUNT' },\n      { LedgerId: 5, Amount: 198.44, Rate: 13, Naration: 'VAT' }\n    ]\n  }",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/SaveSalesInvoice",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "SaveSalesInvoice"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AddSalesInvoice",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"VoucherName\": \"SalesInvoice\",\r\n  \"Narration\": \"4%DISCOUNT\",\r\n  \"VoucherDate\": \"2024-04-04 00:00:00.000\",\r\n  \"PartyLedgerCode\": \"68\",  \r\n  \"RefNo\":\"SBD-01270\",\r\n  \"Api_ResponseId\":\"SBD-01270\",\r\n  \"ItemAllocationColl\": [\r\n    {\r\n      \"ProductName\": 55,\r\n      \"ActualQty\": 60.000000,    \r\n      \"Rate\": 43.880000,\r\n      \"Amount\": 2632.800000 \r\n    }\r\n  ],\r\n  \"SalesInvoiceDetail\": {    \r\n    \"Buyes\": \"MEGA MART PVT.LTD- LAZIMPAT\",\r\n    \"Address\": \"LAZIMPAT- KATHMANDU\",\r\n    \"SalesTaxNo\": 303408110    \r\n  }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/AddSalesInvoice",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "AddSalesInvoice"
              ]
            }
          },
          "response": []
        },
        {
          "name": "BillWiseAgeing",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "MageGw1RouNjdN2VzGcRoOaNo3nMQdOL13ZXiveJ4WnhXBIrrkVDfc-Ih7RGq6hhU7X4v8LNBPVLR_QaUpNib39ImdIQVx5GDjlVZ-YHfCI5h7aUC-qpzA2oM8tzEdnEDCH0s8cgvw5ck0gC0G0qGhKC92S3ij9FrpbE_8DplBlqAZ8C9Q59OwKmshqMsW_JJ8dOihGoFTRzApP-k0C33BCM0x5T1tsQ9IV0eAE_-KL-3hifBPpCzlFaMSn1_onEZYSD1PzAagE50avZiP5ZfIqOPPxXLywpc93ivx2CBQft1WZMx_ejAHRg59KGuwmMJWpGaOodwFvj6G-ap_4aWVR5Z_keNYL9wYft8eSlMnnXc9YzB3yc6_V3Pl15mIjO1rAMWLRCHhvBwYdxAHFaXg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"forDate\":\"2021-03-22\",\r\n    \"duesBillOnly\":\"true\",\r\n    \"ledgerGroupId\":\"0\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Inventory/GetBillWiseAgeing",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Inventory",
                "GetBillWiseAgeing"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Agent",
      "item": [
        {
          "name": "GetSalesmanNameForGPS",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"userId\":4009,\r\n     \"routeId\":1,\r\n     \"passKey\":\"20211031@Nepal#321@BIO\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetNameForGPS",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetNameForGPS"
              ]
            }
          },
          "response": []
        },
        {
          "name": "UpdateGeoLocation",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "yeALmtsPy4W4WHwBlhOEg1WBYpdOlDYTxuZ2z85xrcMYst11NjFnEy9aDzvMHG7gWvwjnKOofzqpR80N5OLm1rbloQ2gjk9xkQXJam9HZT8qttl8n91vjWMJZ0qF_C3j0vz3w7x1-xKN4Rg7L7sOBEmin4xlrIQ-nvwlvAyB_09h4sNq-oG4v5DeLTtjqiaxolWLNKn2ueQT98BD9VKWlW1olb9liuh2r34v_iUHN7WvUj29QosUZUAuUw19zVtsEluZIni6weOOFl1i03UlxUCbMO2uMt_qPi3zsEw5Q_jbVnIDWy5k_JfuBiCcLd1yyE6QhYuKLu1VlRNxf8EyMrWTdtsnURS0qwcUqtD5InnxeXVpSPUssnkzA60lTReR8A0yqzkE9K8D1OuBh2WKo7FRub8VJqNDzaQrJ6dEz-W-4V4MFhb7xx4EElxU35t0",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": " {\r\n     \"lat\":2.002,\r\n     \"lng\":2.42,\r\n     \"ledgerId\":1013\r\n }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/UpdateGeoLocation",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "UpdateGeoLocation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetSalesmanWisePartyList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "_QVWwc9QrESoUaRcyUg2l2ZO5oKm73mQXEO-A_8V_LmxiVrW1BFWYLaz4TfIm822N3pIcXwpsvJ-N4kFT3iAyNBJ-fbnqUu7NoPmBD8nTzEa0fihnZpC3CS8LnvByQPSLc3QDeSHaDL169OnyENGhKqO7mIiXubzIhYGNjc9xdCbeBdD4WXXjDdi9QsGtUMbfEn9Tlk9W1pKioiwhbZCdJzRC8xo4-1lxcQGOYLlBR2_42Cx7ng8o-dfY6RFVuS26FkXvmmknEsGxT3clpcU9S88WjksiSIsDhn_nXkeWKtpvYmXmhq24lANKmNG7WzqImYk2cw2gq0M3zlbcp7o-QKSMWeJlAUJDWj4BDq3Rw0Ykpo6Q39ABqpmAqDp1fUQMBE_8n1w5y43BebjgMR35ggKm4LZaVYigAKaxhWYZ8oUqBep0FGnGQiShCc9n5_k",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": " ",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetPartyList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetPartyList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetSalesmanProfile",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "MuBvEYDJUY5hwjWOdejv6nJrfWV0N-IHFZrNrHUCbkqVbDRXrgIPcTKLLkKF36v5Epe8YBZukW_eLeS9B8PGm-_HaPRK90he4zMmtUcBmM4sGv-n6YKikPfkKstoq7QaBXa4j-HyhvJm2y6g-r-0P21FRLeNV6mz6HYK5Rmkrs2mXJBzxBVGX40-PkpudiIBJql-9gFhWCjlQqP9PpGblTelqVFLEYELt07jIOvrKI1cELX1U2nmrw_EYVsUDH7-a7rO_4AGlxfV1eQUeuPSHwpnhGivnoTNLU6Cd4_xPH24rHUT0QtbxELrf1FW8lIvCXcVzEgoOwZFJZOxA6S1sLSfat9pkhIWYfDXDzAQehKEI42b6PhcXD-823IaPLUq0Vwf3T46fOHq0fb4caM-GaQbg1OUwHZntQxp8m4W7m-pUlHLeGmNV1Fi1V4gz5WL3eibFkUQsh1naz0pgvpCDQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"forUserId\":6008,\r\n    \"forAgentId\":\"0\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetProfile",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetProfile"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Exp_GetExpensesType",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/StaticValues/GetExpensesType",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "StaticValues",
                "GetExpensesType"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Agent Sales Receipt",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "-R_YLR8JyeoxJO-8tNfEBptqnt2YR249rKw1v4r0Y3o_xyrNjsnq87VgoWtFblp70EsEHjKlNWJHNBzdMrXMPrbfBehZdPAMTuOD58b1rEWkRS_NQ5xhH73stcClLtwBbmhtRtB5aQ_4buLlm9t1AQ-gGgaR6fMGnFyyfNe0ZUWXlfFeVEBnjTGXm7urHdYPfrtIk4iLIe4_UBZb_YqhND3sjPEdoPhZYdxjRrrXEZFJBOuNLS2p2zoTEwdmZuYITSIwWkJ1dh6QayF2ie7Fz9OZ4E_aKg97ludLZnri4VUOon6RAv05FUG_37gmFp3VpLgz_Q8shUoUlUJUyyI-3lO9pqsyIlOrHkkjploeZVZ_GQU1pvTvXBWQAu78wC5JQg6Idt455B8doFmyUz7PilY7YjubMIORljFuBC-O6Bb3vO_pRiUStSo8SnEU9fALvdAlK6uccbEOww9GppPwdA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"agentId\":\"0\",\r\n    \"dateStyle\":\"1\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}v1/Agent/GetSalesReceipt",
              "host": [
                "{{URL}}v1"
              ],
              "path": [
                "Agent",
                "GetSalesReceipt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "LedgerGeoLocation",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraData",
                  "value": "{\n LedgerId:1,\n Lon:0.1,\n Lat:12.12,\nLocation:'nerest locatioon'\n\n}",
                  "contentType": "",
                  "type": "text"
                },
                {
                  "key": "file01",
                  "type": "file",
                  "src": "/E:/_Layout.cshtml"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/UpdateGeoLocation",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "UpdateGeoLocation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "UpdateLedgerAddress",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraData",
                  "value": "{\n  \"LedgerId\": 1,\n  \"Address\": \"KTM\"\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/UpdateOutletAddress",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "UpdateOutletAddress"
              ]
            }
          },
          "response": []
        },
        {
          "name": "NewCustomer",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\n  Name:\"Sachin\",\nAddrss:\"KTM\",\nMobileNo:\"9802921231\",\nEmailId:\"sachin@live.com\",\nContactNo:\"9802921231\",\nContactPerson:\"ContactPerson\",\nPanVatNo:\"1212\",\n RouteId:1,\n Lon:0.1,\n Lat:12.12,\nLocation:'nerest locatioon'\n\n}",
                  "contentType": "",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/NewCustomer",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "NewCustomer"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Start Route Visit",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \" RouteId \":1119,\r\n    \"LogDateTime\":\"2024-03-31\",\r\n    \"Lat\":\"27.28\",\r\n    \"Lan\":\"87.2899\",\r\n    \"Location\":\"new Baneshwor\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/StartVisit",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "StartVisit"
              ]
            }
          },
          "response": []
        },
        {
          "name": "WaitingFrom",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"MaxWaiting\":\"14\"    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/WaitingFrom",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "WaitingFrom"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Exp_GetExpensesCategory",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Agent/GetExpCategory",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetExpCategory"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Exp_GetClaim",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetExpClaim",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetExpClaim"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPendingSalesOrderDet",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": " { \r\n     \"ledgerIdColl\":\"\",\r\n     \"isPost\":\"true\"\r\n }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetPendingSalesOrderDet",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetPendingSalesOrderDet"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPendingSalesOrder",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "yeALmtsPy4W4WHwBlhOEg1WBYpdOlDYTxuZ2z85xrcMYst11NjFnEy9aDzvMHG7gWvwjnKOofzqpR80N5OLm1rbloQ2gjk9xkQXJam9HZT8qttl8n91vjWMJZ0qF_C3j0vz3w7x1-xKN4Rg7L7sOBEmin4xlrIQ-nvwlvAyB_09h4sNq-oG4v5DeLTtjqiaxolWLNKn2ueQT98BD9VKWlW1olb9liuh2r34v_iUHN7WvUj29QosUZUAuUw19zVtsEluZIni6weOOFl1i03UlxUCbMO2uMt_qPi3zsEw5Q_jbVnIDWy5k_JfuBiCcLd1yyE6QhYuKLu1VlRNxf8EyMrWTdtsnURS0qwcUqtD5InnxeXVpSPUssnkzA60lTReR8A0yqzkE9K8D1OuBh2WKo7FRub8VJqNDzaQrJ6dEz-W-4V4MFhb7xx4EElxU35t0",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": " { \r\n     \"ledgerId\":1013,\r\n     \"isPost\":\"false\"\r\n }",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetPendingSalesOrder",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetPendingSalesOrder"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Agent GetTodaySales",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetTodaySales",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetTodaySales"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Agent GetProfile",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Agent/GetProfile",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetProfile"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Agent GetPartyList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"routeId\":\"0\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetPartyList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetPartyList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetDailyAppAttendance",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"forDate\":\"2025-12-10\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetDailyAppAttendance",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetDailyAppAttendance"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Get No Order",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2021-01-01\",\r\n    \"dateTo\":\"2023-12-12\",\r\n    \"ledgerId\":0,\r\n    \"agentId\":0,\r\n    \"reportType\":0\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/GetNoOrder",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetNoOrder"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Update No Order Schedule",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "type": "file",
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/02[2560].jpg"
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  TranId:4061,\n  ScheduleRemarks:'visit done', \n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/UpdateNoOrderSchedule",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "UpdateNoOrderSchedule"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveNoOrder",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "file0",
                  "type": "file",
                  "fileNotInWorkingDirectoryWarning": "This file isn't in your working directory. Teammates you share this request with won't be able to use this file. To make collaboration easier you can setup your working directory in Settings.",
                  "filesNotInWorkingDirectory": [
                    "/E:/hulas/Pan missing in api.txt"
                  ],
                  "src": "/E:/hulas/Pan missing in api.txt"
                },
                {
                  "key": "paraDataColl",
                  "value": "{\n  VoucherDate:'2081-02-29',\n  LedgerId:1,\n  Remarks:'Sanima Bank',\n  VisitStatus:1,\n  Lat:2.125,\n  Lng:2.025,\n  NerestLocation:'new location',\n  NextScheduleDateTime:''2081-02-29'\n}",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/SaveNoOrder",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "SaveNoOrder"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveCDR",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "[\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 1,\n    \"Name\": \"Dhoni Dhoom Machar Dhoop 72 DZN\",\n    \"Code\": \"P00001\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Dhoni Dhoom\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 1502,\n    \"Name\": \"Kasturi 10 Pouch Incense Sticks 144 DZN\",\n    \"Code\": \"0023\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 2,\n    \"Name\": \"Kasturi 20 Incense Sticks 16 DZN\",\n    \"Code\": \"P00002\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 3,\n    \"Name\": \"Kasturi Gold Incense Sticks 16 Dzn\",\n    \"Code\": \"P00003\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi Gold\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 1503,\n    \"Name\": \"Kasturi Incense Sticks 64 Dzn\",\n    \"Code\": \"0024\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 5,\n    \"Name\": \"Kasturi Mix Family Incense Sticks 9 DZN\",\n    \"Code\": \"P00005\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  },\n  {\n    \"TranId\": 0,\n    \"LedgerId\": 1,\n    \"StartDate\": \"2025-05-20\",\n    \"StartMiti\": \"\",\n    \"SNo\": 0,\n    \"ProductName\": 6,\n    \"Name\": \"Kasturi Muttha Incense Sticks 36 Pcs X 2\",\n    \"Code\": \"P00006\",\n    \"ProductGroup\": \"Agarbatti\",\n    \"ProductBrand\": \"Kasturi\",\n    \"ProductCategories\": \"Agarbatti\",\n    \"Opening\": 0,\n    \"Purchase\": 0,\n    \"Closing\": 0,\n    \"Status\": \"\",\n    \"Remarks\": \"\"\n  }\n]\n",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/SaveCDR",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "SaveCDR"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Exp_Claim",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\nDateFrom:\"2025-09-23\",\nDateTo:\"2025-09-23\",\nExpenseTitle:\"Test Title\",\nExpenseTypeId:1,\nPurposeOfVisit:\"Field Visit\",\nDetailsColl:[{\n  ExpenseDate:\"2025-09-23\",\n  ExpenseCategoryId:1,\nQuantity:1,\nRate:100,\nAmount:100,\nDescription:\"test desc\"\n}]\n}",
                  "type": "text"
                },
                {
                  "key": "file",
                  "type": "file",
                  "uuid": "0617e2c2-ab11-40a0-9196-40ee020cfd81",
                  "src": "/E:/VALLY SALES.xls"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/SaveExpenses",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "SaveExpenses"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveRoutePlan",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "PUT",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "[\n  {\n    \"DayId\": \"1\",\n    \"AgentId\": 1,\n    \"RouteId\": \"169\"\n  },\n  {\n    \"DayId\": \"2\",\n    \"AgentId\": 1,\n    \"RouteId\": \"3\"\n  },\n  {\n    \"DayId\": \"3\",\n    \"AgentId\": 1,\n    \"RouteId\": \"0\"\n  },\n  {\n    \"DayId\": \"4\",\n    \"AgentId\": 1,\n    \"RouteId\": \"17\"\n  },\n  {\n    \"DayId\": \"5\",\n    \"AgentId\": 1,\n    \"RouteId\": \"169\"\n  },\n  {\n    \"DayId\": \"6\",\n    \"AgentId\": 1,\n    \"RouteId\": \"0\"\n  },\n  {\n    \"DayId\": \"7\",\n    \"AgentId\": 1,\n    \"RouteId\": \"0\"\n  }\n]",
                  "type": "text",
                  "uuid": "95e1deb4-173e-454d-8fa4-ad19c5e10b86"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/SaveRoutePlan",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "SaveRoutePlan"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Employee",
      "item": [
        {
          "name": "GetLeaveTypes",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "ObstRiecsW6XJhMkXs_xx2nEAsNvrrsqGP7VvK6a73XT8pUin8BRYUqe3eY5h_BSSzqJQwqzNbnvWJWjG1E39vEpjPIpGcEF12xajG1buWxzya-1JFp8FOinRcUNa0CfDX5dR1OrtI-_u0TqaH7_OfJbzWMkfQB7i23rnzMo3yn5KX4iyAGULkqUCq2QNf3jJ1NjjWHXQKJpvbwBcy8zZn2p3mE8C6-LOZg0GgxyzMu2GC6Z20lMOVlqhlDdZXApFJ6FzdXLlXMsmO2OdJk5PK4ye3gWpXfjxzTYY1Ih39VXN2XcjYnVTwCxvutcOQimpQJfHwsJDfka2ZwOKYRVi3ziil0EWabC_8MVS_V2_Tm_5cMW15RaFTIq2UVHppYTp73XeaHU0ZGsT4AXCya6k9hEfbTNn4Yg3BsGZDPefxBKpld4d52m8yCXrlXHnT1r",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Agent/GetLeaveTypes",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "GetLeaveTypes"
              ]
            }
          },
          "response": []
        },
        {
          "name": "LeaaveApproved",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "ObstRiecsW6XJhMkXs_xx2nEAsNvrrsqGP7VvK6a73XT8pUin8BRYUqe3eY5h_BSSzqJQwqzNbnvWJWjG1E39vEpjPIpGcEF12xajG1buWxzya-1JFp8FOinRcUNa0CfDX5dR1OrtI-_u0TqaH7_OfJbzWMkfQB7i23rnzMo3yn5KX4iyAGULkqUCq2QNf3jJ1NjjWHXQKJpvbwBcy8zZn2p3mE8C6-LOZg0GgxyzMu2GC6Z20lMOVlqhlDdZXApFJ6FzdXLlXMsmO2OdJk5PK4ye3gWpXfjxzTYY1Ih39VXN2XcjYnVTwCxvutcOQimpQJfHwsJDfka2ZwOKYRVi3ziil0EWabC_8MVS_V2_Tm_5cMW15RaFTIq2UVHppYTp73XeaHU0ZGsT4AXCya6k9hEfbTNn4Yg3BsGZDPefxBKpld4d52m8yCXrlXHnT1r",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"LeaveRequestId\":1,\r\n    \"ApprovedRemarks\":\"Ok approved\",\r\n    \"ApprovedType\":2\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/LeaveApprove",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "LeaveApprove"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AddLeaveRequest",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "ObstRiecsW6XJhMkXs_xx2nEAsNvrrsqGP7VvK6a73XT8pUin8BRYUqe3eY5h_BSSzqJQwqzNbnvWJWjG1E39vEpjPIpGcEF12xajG1buWxzya-1JFp8FOinRcUNa0CfDX5dR1OrtI-_u0TqaH7_OfJbzWMkfQB7i23rnzMo3yn5KX4iyAGULkqUCq2QNf3jJ1NjjWHXQKJpvbwBcy8zZn2p3mE8C6-LOZg0GgxyzMu2GC6Z20lMOVlqhlDdZXApFJ6FzdXLlXMsmO2OdJk5PK4ye3gWpXfjxzTYY1Ih39VXN2XcjYnVTwCxvutcOQimpQJfHwsJDfka2ZwOKYRVi3ziil0EWabC_8MVS_V2_Tm_5cMW15RaFTIq2UVHppYTp73XeaHU0ZGsT4AXCya6k9hEfbTNn4Yg3BsGZDPefxBKpld4d52m8yCXrlXHnT1r",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraDataColl",
                  "value": "{\n  LeaveTypeId:1,\n  LeaveDuration:1,\n  DateFrom:\"2022-03-14\",\n  DateTo:\"2022-03-15\",\n  LeaveDuration:1,\n  LeavePeriod:1,\n  Lat:1,\n  Lan:1,\n  LeaveHours:0,\n  Remarks:\"reasong for leave\"\n}\n",
                  "type": "text"
                },
                {
                  "key": "file0",
                  "type": "file",
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/Image[1967].jpg"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Agent/AddLeaveRequest",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Agent",
                "AddLeaveRequest"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLeaveBalance",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Employee/GetLeaveBalance",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "GetLeaveBalance"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetLeaveReqList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-12-12\",\r\n    \"dateTo\":\"2026-12-15\",\r\n    \"forUserId\":0,\r\n    \"leaveStatus\":0,\r\n    \"forApproval\":true  \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/GetLeaveReq",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "GetLeaveReq"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PaySlip",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"yearId\":\"2082\",\r\n    \"monthId\":\"8\",\r\n    \"empCode\":\"DT-KT125\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/PaySlip",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "PaySlip"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AssetRequest",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraData",
                  "value": "{\n\"RequestById\":\"1\",\n \"AssetsReqDetailsColl\":[{ \"ParticularId\":\"3\",\"CategoryId\":\"2\",\"PurposeId\":\"1\",\"Qty\":\"1\",\"ReqFrom\":\"2026-01-01\",\"ReqTO\":\"2026-12-12\" }]\n}\n",
                  "type": "text",
                  "uuid": "388bbdf2-e804-4b32-822c-d8307939d949"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/AssetRequest",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "AssetRequest"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AttendanceAppealsListForApproved",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"EmployeeId\":\"0\",\r\n    \"DateFrom\":\"2022-07-16\",\r\n    \"DateTo\":\"2026-07-16\" \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/AttendanceAppealsList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "AttendanceAppealsList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetAttendanceInoutMode",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/Employee/GetInOutMode",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "GetInOutMode"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetDateWiseAttendance",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2026-01-01\",\r\n    \"dateTo\":\"2026-01-16\"     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/GetDateWiseAttendance",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "GetDateWiseAttendance"
              ]
            }
          },
          "response": []
        },
        {
          "name": "MyTeam",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2022-07-16\",\r\n    \"dateTo\":\"2023-07-16\",\r\n    \"ledgerGroupId\":12,\r\n    \"dayRange\":\"60,90,120\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Employee/GetMyTeam",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Employee",
                "GetMyTeam"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "General",
      "item": [
        {
          "name": "IRD API Testing",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"username\":\"Test_CBMS\",\r\n   \"password\":\"test@321\",\r\n   \"seller_pan\":\"999999999\",\r\n   \"buyer_pan\":\"123456789\",\r\n   \"buyer_name\":\"Sarojin Nepali\",\r\n   \"fiscal_year\":\"2073.074\",\r\n   \"invoice_number\":\"3\",\r\n   \"invoice_date\":\"2078.07.10\",\r\n   \"total_sales\":180.0000,\r\n   \"taxable_sales_vat\":0,\r\n   \"vat\":0,\r\n    \"excisable_amount\":0,\r\n   \"excise\":0,\r\n   \"taxable_sales_hst\":0,\r\n   \"hst\":0,\r\n   \"amount_for_esf\":0,\r\n   \"esf\":0,\r\n   \"export_sales\":0,\r\n   \"tax_exempted_sales\":0,\r\n   \"isrealtime\":true,\r\n   \"datetimeClient\":\"2021-10-27T17:23:40.727\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://43.245.85.152:9050/api/bill",
              "protocol": "http",
              "host": [
                "43",
                "245",
                "85",
                "152"
              ],
              "port": "9050",
              "path": [
                "api",
                "bill"
              ]
            }
          },
          "response": []
        },
        {
          "name": "StaticValues",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "AG0M_JUkNZejQ0P__4rx0ISKEyur7auyofBttWm4b6a19YWtIqIS-Mh8jofuDtYG-YcX51NUA2823wJ8Ve2o01ic4ZQulMLMw4pQgn8PCWM9AM5w14RLoKpjornvbhzelm2UXI7f2Jb0vnp88BAJhg8BpZrzbNHmFDtY85XSmGy3DLN8w87BRXxX_xajynYs6K54gBq2AVN0cShZNsEu_EwTbO-3h9TbBkvQeaWTNTUHOaLikbV4NaKts2lcq2GCCObK9m8OV5xqPYiiydbSkpBKyXVUxo2gjUp-miz-ij5s4mJIfbNA8mhknfA95o8KKV-EBFT_H7EOvK7Pyy_6-XZ15wkQ-sTkqdhpB_ibuKI",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/StaticValues/GetDashboardTypes",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "StaticValues",
                "GetDashboardTypes"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Dashboard",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "v-k0KyOtAVDvlKabKU2OE4rB5hy5tqORa2nAKX1uH3DqfsxXMsiW22VA2MHixMyGVApJArDHEquArch5etNS1m5PwOk1y7AdNWu88E0cuEflNfzEtEInyXAIMbuK-pTfKm6Sou1AtBX6OQosquYW2FezGNTFA8YwPSdMbBeYm7mC8SRaeKDLc8bCxZIv30HzNXi16LtwZW1ovjQ_ITHeAY2JuZRbqmTff0oZUdmDhKsFL7wD3_CeOEvqovgS8ndxqlA-8Ye9_GuzGJgJvkzcLvIZDk8ZO0lqGcB_u6KvJgN5jSZsDWfbYXCqxdJLI3uANx9uLgNz3dr3Ev2Ve_ukVAnZ_pPxO0CxNrCNEsSbv3tRfXJSMl2qqBROPjO76K6JGfFlrt_0ASFQf2RbAfaHRtyNoM5qvTGHLlMViRTBQRgU7lgN5VgBgIgTHcHL5UKqECitXefMB6a_e9JBzR7FZA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"reportTypes\":\"15\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetDashboard",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetDashboard"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SMSThrowNotification",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/SMSThrowNotification?number=9802921232&message=This is only for Test.&passKey=sms@2021Dynamic",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "SMSThrowNotification"
              ],
              "query": [
                {
                  "key": "number",
                  "value": "9802921232"
                },
                {
                  "key": "message",
                  "value": "This is only for Test."
                },
                {
                  "key": "passKey",
                  "value": "sms@2021Dynamic"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompanyList",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/StaticValues/GetCompanyList?passKey=getCompany@2020",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "StaticValues",
                "GetCompanyList"
              ],
              "query": [
                {
                  "key": "passKey",
                  "value": "getCompany@2020"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetGeneralConfig",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "AybgujrP4Ymrvdwuw7wWGbE4ViqhixWtzO-sjeFp5_l4ItQeTXHBVdRl9pFEbkI5Pob0HRzopayBrNvLp-T4IVLTQw1y5w5bDTt6MeSm0YfEb5iYPFLiVjgd7NC_Xexfh49JCvRYd6W7rMpR4N32xwQ_4szIBGO0oW5P5wga9Oocc4N9Odz4bkDeIApR6O2ynconv-7yuewgfYFkddmWAjO1UgYXelJFZ2jEhctA1HM0764oag7CPIZduQMvYlUu2v6FKuuial3fTSxuTuUpuU_vG6qHV6292S0OAZhGb00qeM63Kzo6ljRkmChJscPskk9aXPNAdRRPswMAxvCmSgnKhuFVi7teIfZxKe-R3lvgykyfPpNpPe4E2novnUZ8kgHUuw_qy6B6P9yuRiCs6Q",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetGeneralConfig",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetGeneralConfig"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompanyDetail",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "mz3rvEuDECuKyfYI_wKFYeibXVNcVn3EWAfuByBHUFqhdtVNJm5ChNFbbiSJT9NdP6LJgMq06Bkpzt49z9OnBa3din98CLR4lm3tVFhujySxv2pgt8ovH9lijIPltjlmg6jyxZ_77f5fUIDMnaRqmHzKo_GQlwwu6F_MqZqA_d-ZabkY-CUyO1IZ_TsS0PyCM1eIv2fFDw3tUHB-V6yWmOgun1C83jH2O3JQIERbtH3wEgH3a-kTyYWUjQ4-8dOzU-XuYN8u8f2J_V6TbO8SOLAXKFhJFgTEFnxbwJhn__aY2st6OiXo_8PlFPDeaC80Z4Ob5m8uH5VdWM8Aa9cNyIUjXbxWM670Y4QWZHI2RLsbWqV9odNurLZGSE4z1_aSk6DQcfyiBKOUBlUCQc9w2A",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetCompanyDetail",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCompanyDetail"
              ]
            }
          },
          "response": []
        },
        {
          "name": "IsValidCompanyCode",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dbName\":\"Pivotal_2001_V1\",\r\n    \"passKey\":\"Petrol@Dynamic2022\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/IsValidCompanyCode",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "IsValidCompanyCode"
              ]
            }
          },
          "response": []
        },
        {
          "name": "UpdatePwd",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "ws4VVzQBQjRJkCHRKT07KiRhSEEZVCfRDUO2KoNDFfTVfE1YR727NcWAx8siRL-uDQI2bYI7BmOns-b5tf2xobI96J9_NfMfkFJhMexFCtIr-GHI7NwDjbVUZMi0RXlz3_7D6euFlzPkwa8_WZuad3Wym1xh4AysdvCbpnwH2pmqxa6pbAhiJzTGPAmzD4YfyJsy6X1pTWOwqK9-qSuf4QNcAwkYinbG5kfAhlCb7bVJkCXT-1yzrwb0HDUYrVE93h4zeCn7SljTtnowbhyMSn8ON2FYNqgJah6dcpdjqZ_zCruvREGzzfeK6LBmyCKYEoRVCXIhItctvfFn1mDAJRVaaLuDXipJ0W1d4kOZhlU-oyIBXUYUkJonelLMbUO7N4qYqZ-jcyUbbPXRZdbhcg",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"oldPwd\":\"admin1\",\r\n    \"newPwd\":\"admin\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/UpdatePwd",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "UpdatePwd"
              ]
            }
          },
          "response": []
        },
        {
          "name": "IsValidUser",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Aarpz5jtVL0qXMNokZx0zpByTSdWEPX3jpVjiMpwmWkXG0d3bkfj7eMx6lRp9Bg3oShJyw2T3O0CKMzYhYqjFjcWSgw4orgPxzC4w71pNlhK0hy_rjQQScZ-3EBrMQPZn3mFEfPBRQwPU905MHCLFkeG904E8gc5vCSiK-PoWKrcDWab-C3aOdFpm0UeWqhHZk53uUww_DI2shgFFAKGW0r8m9KrSF4l9f9r39gsmXRxS849473W0lEyAoF16u6ZaCcd1frcFHBeq05yFc1etSNjMrLofdtuGCefA_fs7CK9pu_jE4LCglmjm4m-Gs3DbZtp7ezZv4g9Nmf1b2ypGibE96GbvvBJmPH-bDWTJLO_VntvtBaxUB6fvpyDG8jN",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetUserDetail",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetUserDetail"
              ]
            }
          },
          "response": []
        },
        {
          "name": "BranchList",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "5NJ9qwQqGa0dVLkaC1-IXj1rv29s-MGKo7RqmfUxb1ejbfsiXoMzLA3-AHLBmUJBBBctQk7aeUAFPufWfR3q6DqDMisxqNLpmstulkte6NKi8vpVuwQD6KtBsijgs-XvYlJ45SwYETrQR2bGJi_Nw07zd2zIwQk-WWIaXI-jz-zkg3697w2FRjtLOxaeSlh1O1vuccQSXzSsa9fg1RqppJjoUcIjK-skBNMMN-zsQlbGTW1ejo-EplsaOFydyX37DGx9tBVfnMjiiZm5lbRb8OYnrEl5-5kcBVCFrW1QtiJeRC44SRZUxL5MNWvwI_7DJvOBqncrPUq29jjGwe_Y-o42cNZyhqqHuxR0N2ILKus",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetBranchList",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetBranchList"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetOneSignalSetup",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "Jqbw5hazCviNFHY4-zGS5W4NuAenT8EaT6yB9-jltk7JyaFkmAnVXFymA6VlzyjPp1OjWVF2zQJzIxFVQaF4DuWcsfPyROaYXCIgE8uLSnGWUydWyPiH1s3rcTRNMm6FYGemDnVzRc1lOmcpYPR6-n8Nzw4GaK0pKHPPUmwt3a4_CcHQIaY-sQZdk1Ms2eGLMK_K0cAB9Xbow8twsqG20CELg1Yh8XFwPkvpJe0Ip1szFLpb0zTTXcXdIFFrbULoYLZOlemnCxqNmbZVObZjYhFY5Fnn7bIgLR57B8e2zITMfw02UrZMJnZTKSjXne6rYcpql1fY21_3SZRdNz8Te-E6HkkwQ8ezwKg_11T4_56YwWPixYNQ8ijwcd3NIXe0",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetOneSignalSetup",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetOneSignalSetup"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetNotificationLog",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "CvtvqBddok3Q6jwR0Ov8tnglPL6z4pDNitpddjR8ZzqOIdN1VU7d0FLzi30LbrjcwAp3dddUSIpxEUAR7vSBuyfh7A9Bimi0HCRfvst1XpoQMAb3cm6IEPLR2TzxpZufZwzNhNmBtqE77iudumThlz2t03CGVj1KBPThkVUZ4Mj2ifr9xtLgRtiOtlsiCM9TIctpPJVsKnpSKEXdyczbCs7BWpyud3k1zrfZu9ge5RQvTsuYzZeceGVw6OlTy7cKmJM6GnFjCfR_lUiE05RAk-73VfLx8Cw2ARwfAqjyZAoUqpzUtb2iZhgeWEfMvPODZqmFWft_nXSfQiSWSYp0o8zCPVTjRqz4BeSC-IXmzINCc8oJDMd6viEPdtC7hT_n7chK0Y8MWBr8bmKv1iw3yA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"dateFrom\":\"2020-01-01\",\r\n    \"dateTo\":\"2022-01-01\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetNotificationLog",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetNotificationLog"
              ]
            }
          },
          "response": []
        },
        {
          "name": "DynamicAI",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"qry\":\"get today order details\",\r\n    \"queryType\":3\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/DynamicAI",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "DynamicAI"
              ]
            }
          },
          "response": []
        },
        {
          "name": "CustomAction",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"action\": \"DisableEnableAgent\",\r\n   \"para\":{\r\n    \"AgentId\":20,\r\n    \"Status\":\"true\"\r\n   }     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/CustomAction",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "CustomAction"
              ]
            }
          },
          "response": []
        },
        {
          "name": "CancelTransaction",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n \r\n  \"voucherType\": 13,\r\n  \"voucherId\": \"9820\",\r\n  \"tranId\": \"911110\",\r\n  \"reason\": \"sdfsdfsdf\" \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/CancelTransaction",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "CancelTransaction"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PostTransaction",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n     \"voucherId\": 13,\r\n     \"voucherType\": 13,\r\n     \"tranId\": 32933,\r\n     \"remarks\": \"test\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/PostTransaction",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "PostTransaction"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetTranPostLog",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "KPnFpMx1cGdz5-ZN2Y3DDZvnmOrAZaeLKoN-UD-0qWhnK8VwhvkS3qR08TCbhNriR2qPJ10Uowt6aJa2Pqd2BQEdc_IOYlXH6Urt28DeiUpMQj2O-Iq2p_x-50s8ZJ02hsnC0ws2cRXlokZ1eLTZ4gM8J1FrK5zjsi_4vY98r_AIkO4LTkIuVX4FRwoDEYAI0xk659CKYFJjMmtBBgzmmZhQ-CM06XNFsU9q0pVJFHy7Obia5tf5JovWgeZQHueBpOMtnq-7907p0j5OuOGf2hdH2n1RU30hQxQGtQCgaNeBfQCCRP1K25k2N6VkisfsYVjeAQiWII7r32-Mpz1KY0VPrJ5INQvIUotyJf_74HQXu2wfwL0wRZ3e1sGO4ZG8FeuyvcZUdBGl1U40zsbtH5o8tb7VQbvEE1OWH1s2EmESX_fzrG-6_hpqG02k2J7K",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"tranId\":1,\r\n    \"voucherType\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetTranPostLog",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetTranPostLog"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetTransactionForEdit",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "V-EVcxaJELo8udf3LowziUW0VdVNERHfhq5avv2NQ9a2uom_gzUUdWvdqCpqgAmSYNnYCMZImjLs3olElkNiqveYoPJRUozHOZwD1jBx7UJtb9q34y1jxyWs7uyKnFgQsQ_Dg7ceSPdLraTP5KgEzPMYaztk3e7H2YXMf212EiY2scqwgYAyp_mACzRDnFoHWax85EKABgwhyYncyBAt33tnA5ukmeRocAB1C5T43g-z5D_moP0kUROoTecoYjKIO3rOuPNhq34VKds4fge2jOWKagj2BuSyp7n9P9Bw-ogrsmSRwrOrVs-NSgHI9sAplbzuh6u_pK8AIMfeaqN3pD_LeN5W5XVusasx65ydw2rAdJpzX2tK73c4X1HtqKCVxD5quqrZY3JHhaL3ihOzGFN4x6OGlhCyR1jo3C84QiYdoYEoP7ctBidW2w9iKCuV",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\":14,  \r\n    \"tranid\":1015\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetTransactionForEdit",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetTransactionForEdit"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCompanyPeriodMonth",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "BdUIREM5kw8GnJZBbuqBFoN70KK_jcN4RrDI2FmITVJANwiPq45gvuSZd9SeuVtloYp7XFlkgGMR2m_RFKKASy0T3f45Qh7A7OrlUGwkwTLYfz_AiU2KdZe_yjLOn0ulNzmmz2amg5iKIRBgnDNh840YvH_SXz3Am_hl1oOpafxd8NszyOm9_GdlnaAR171ZMG9pb_ji9Mq-QRDhmSH3vSzNYmW4pe7DyFuyQ_4Z7_fQdM9XpKWk3QZCxbmT06UMeYD0WJ6UxZQc4sJ6iHS_U5k5JR8UYpVMsW_S27DxuwkOR3XMpRroVoDFD6R0ZtbBtgETnIOZ1i7iLwR4IoZxf2fV3a3GMt1BrEE5XK-JjKjJmPvSpAfu__hEbQp0kIE4GDNcaCafw3sCqai4gn_T_x9e1nxTtTcaQuY7_D18PlYUu--fqnepj6Wwrm6rOXypBqEj2EA_6SsOxslcbtEW5g",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "url": {
              "raw": "{{URL}}/v1/General/GetCompanyPeriodMonth",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCompanyPeriodMonth"
              ]
            }
          },
          "response": []
        },
        {
          "name": "UpdateAppMissingLocation",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "rxGpbrFEtjNK9edo-i4RJXDKVBZw3LNT_dpORU6LxzfT4_ESCQwyaDw1BEHJvPidg8qHWKOi-76ZiHKeRKPIrAG5Fn7Rb1YRSNmy1JdvQ8RZ7Xbh6lh984rGXUiZ9Z3uMWQByz3vBnI0gUCwPIAqLOQWG1NwWxIUcX7yntbzR9eiNG6SLsSuXf3Q8j3qUz6wyBkSaCkJAll2jox4QLr-qu5EDo9TxFwJcFWM09P7y8AEG0bNuXWOraLC3xaX84VbWBlWFFOXROiEUil_h1XKEx4tp7yj56ECGQCBigQX3_3FKfgOSu-w5MMbDJwsXlJoFvJZ-Uo4PgvnqcBrE7wCDOYHDCUH30B2wlg5ZFusBPI2DiWaXITO4ud_h5Oz_mQ3c6ZR2cgDSri8TiufeX1a1XFL7tIlfEUR7txdEAE9UZog4_cthpwbYLmtjlh_K0mU",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"PassKey\":\"20211031@Nepal#321@BIO\",\r\n    \"ForDate\":\"2026-02-27\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/UpdateAppLocation",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "UpdateAppLocation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "UpdateGPSLocation",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"PassKey\":\"20211031@Nepal#321@BIO\"     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}//v1/General/UpdateGPSLocation",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "",
                "v1",
                "General",
                "UpdateGPSLocation"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SaveManualGPS",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"PassKey\":\"20211031@Nepal#321@BIO\",\r\n    \"DataColl\":[{\r\n        \"UserId\":\"134\",\r\n        \"RouteId\":1,\r\n        \"Lat\":\"27.3964976\",\r\n        \"Lng\":\"85.026177\",\r\n        \"LocationName\":\"\",\r\n        \"ClientType\":1,\r\n        \"MessageType\":4,\r\n        \"Url\":\"haldiram.dynamicerp.online\",\r\n        \"PassKey\":\"1asdasd\",\r\n        \"bearing\":\"0\",\r\n        \"CurSessionId\":\"1asd\",\r\n        \"DriverId\":1,\r\n        \"currentSpeed\":\"1\",\r\n        \"WaitSecond\":0,\r\n        \"IsLive\":true,\r\n        \"Remarks\":\"ssd\"\r\n    }]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}//v1/General/SaveManualGPS",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "",
                "v1",
                "General",
                "SaveManualGPS"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetAppAttendanceLog",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "MuBvEYDJUY5hwjWOdejv6nJrfWV0N-IHFZrNrHUCbkqVbDRXrgIPcTKLLkKF36v5Epe8YBZukW_eLeS9B8PGm-_HaPRK90he4zMmtUcBmM4sGv-n6YKikPfkKstoq7QaBXa4j-HyhvJm2y6g-r-0P21FRLeNV6mz6HYK5Rmkrs2mXJBzxBVGX40-PkpudiIBJql-9gFhWCjlQqP9PpGblTelqVFLEYELt07jIOvrKI1cELX1U2nmrw_EYVsUDH7-a7rO_4AGlxfV1eQUeuPSHwpnhGivnoTNLU6Cd4_xPH24rHUT0QtbxELrf1FW8lIvCXcVzEgoOwZFJZOxA6S1sLSfat9pkhIWYfDXDzAQehKEI42b6PhcXD-823IaPLUq0Vwf3T46fOHq0fb4caM-GaQbg1OUwHZntQxp8m4W7m-pUlHLeGmNV1Fi1V4gz5WL3eibFkUQsh1naz0pgvpCDQ",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"forUserId\":4,\r\n    \"dateFrom\":\"2022-12-12\",\r\n    \"dateTo\":\"2022-12-30\",\r\n    \"isSummary\":\"true\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetAppAttendanceLog",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetAppAttendanceLog"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AppAttendance",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraData",
                  "value": "{\n\"InOutMode\":1,\n\"Lat\":1212.121,\n\"Lan\":132.212,\n\"NerestLocation\":\"KTM\",\n\"PunchDateTime\":\"2022-12-27 15:20\",\n\"Remarks\":\"test remarsk\"\n}",
                  "type": "text"
                },
                {
                  "key": "photo",
                  "type": "file",
                  "src": "/C:/Users/User/AppData/Local/Packages/microsoft.windowscommunicationsapps_8wekyb3d8bbwe/LocalState/Files/S0/4/Attachments/~WRD000[1691].jpg"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/General/AddAppAttendance",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "AddAppAttendance"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetGPSLog",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"forUserId\":6008,\r\n    \"dateFrom\":\"2022-12-12\",\r\n    \"dateTo\":\"2024-12-30\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetGPSLog",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetGPSLog"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SendSMS",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "3mUdQACGIHGtq0AZ-gyx6ZXkx9at0e24DJElM0XAs_9tZQioCSj7XZvUV17FL8NeECOR05pst15HaGNcEJuOWmGJTgxg1iTvDsigAG-sHWOoLqNBU5GpZvTTos--1hvq9c_Mc9jl3MMKcrnKmPE4SSYqhVMqa74OQ3K_rgnbiuA31YTEZmQIlN4v__hznbrGOxEcWJlI8QbVrrZhSN8j7bj6wSywOaskchJh1dLrzpntPXTCpsWwn9XS-oht_UXD93UznDclTGnb6sRDd_W_TTBZwTnmCKUkKad7CnzVGIaJiSt0y_8vjkRXgMM8buhg2Bh9tLdSFJiZUyyG30Sw4Af1C1nNm4eFGrrLSnTsqxo",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"message\":\"This is sms test11\",\r\n    \"number\":\"9802921232\",\r\n    \"smsProvider\":\"quickconnect\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/SendSMS",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "SendSMS"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SendNotificationGlobal",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"EntityName\":\"Test\",\r\n\t\"Subject\":\"Admin Heading\",\r\n\t\"Heading\":\"Title For Test\",\r\n\t\"Content\":\"This is only for test\",\r\n    \"UserId\":1,\r\n    \"UserIdColl\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/SendGlobalN",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "SendGlobalN"
              ]
            }
          },
          "response": []
        },
        {
          "name": "SendNotification",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n\t\"EntityName\":\"Test\",\r\n\t\"Subject\":\"Admin Heading 1\",\r\n\t\"Heading\":\"Title For Test\",\r\n\t\"Content\":\"This is only for test\",\r\n    \"UserId\":1,\r\n    \"UserIdColl\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/SendNotification",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "SendNotification"
              ]
            }
          },
          "response": []
        },
        {
          "name": "VoucherEmail",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\":7,\r\n    \"tranId\":7,\r\n    \"voucherId\":63,\r\n    \"toemail\":\"sachin@dynamic.net.np\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/EmailVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "EmailVoucher"
              ]
            }
          },
          "response": []
        },
        {
          "name": "ExportCustomData",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{      \"passKey\":\"pass@Email\",              \"UId\":47,      \"RptPath\":\"Report\\\\EmailTemplate\\\\DailyDSEActivities.xlsx\",      \"procName\":\"usp_U_AllSalesmanDashboard\",      \"ToEmail\":\"risedoctors@gmail.com\",      \"CcEmail\":\"satyarajjoshi1234@gmail.com\",      \"Subject\":\"DSE Daily Activities Report on Apr  8 2024  6:17PM\",      \"Message\":\"Dear Binaya Bhandari ,             Please find attached the Daily DSEs Activities  Report.          Regards & Thanks          Satya Raj          (IT Department) \"}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/EmailCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "EmailCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "EmailCustomData  RDL",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n  \"passKey\": \"pass@Email\",\r\n  \"UId\": 1,\r\n  \"RptPath\": \"Report\\\\\\\\CustomReports\\\\\\\\PrintAllProdJournal.rdl\",\r\n  \"ToEmail\": \"\",\r\n  \"CurrentDateTime\": \"{\\\"currentdatetime\\\":\\\"Aug 26 2025  8:58AM\\\",\\\"currentdate\\\":\\\"Aug 26 2025\\\",\\\"currenttime\\\":\\\"8:58AM\\\",\\\"currentmititime\\\":\\\"2082-05-10 8:58AM\\\",\\\"currentmiti\\\":\\\"2082-05-10\\\"}\",\r\n  \"FileName\": \"ItemWiseCostingReceipt.pdf\",\r\n  \"AutoNumber\": 5,\r\n  \"StartDate\": \"2025-05-15\",\r\n  \"ProductName\": 0,\r\n  \"EndDate\": \"2025-08-26\",\r\n  \"Variables\": \"{\\\"name\\\":\\\"Sir\\\"}\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/V1/General/EmailCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "V1",
                "General",
                "EmailCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "EmailCustomData",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"UId\":\"1\",\r\n    \"passKey\":\"pass@Email\",\r\n    \"RptPath\":\"Report\\\\Attendance\\\\DailyAttendanceRpt.xlsx\",\r\n    \"procName\":\"usp_GetAttendanceRptForMail\",\r\n    \"ToEmail\":\"sachin@dynamic.net.np\",\r\n    \"FileName\":\"Daily Attendance.xlsx\",\r\n    \"AutoNumber\":1,\r\n    \"DataSource\":\"DailyAttendance,ShiftSummary,AbsentList,LateComing,EarlyOut,LeaveList\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/V1/General/EmailCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "V1",
                "General",
                "EmailCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Print Custom Rld",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"DateFrom\": \"2025-06-25\",\r\n     \"DateTo\": \"2025-06-25\",\r\n     \"AgentId\": 0,\r\n     \"RptPath\":\"\\\\Report\\\\CustomReports\\\\GetSalesOrderSummary.rdl\",\r\n     \"ReportName\":\"Selft Reports\",\r\n     \"URptTranId\":18\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/PrintCustomRpt",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "PrintCustomRpt"
              ]
            }
          },
          "response": []
        },
        {
          "name": "PrintVoucher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\": 14,\r\n     \"voucherId\": 124,\r\n     \"tranid\": 100381\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/PrintVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "PrintVoucher"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetPrintVoucher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\":14,  \r\n    \"tranid\":1045\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetPrintVoucher",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetPrintVoucher"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AddDynamicData Copy",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "AccessKey",
                "value": "Dyn@mic$2023#LiveApi",
                "type": "text"
              }
            ],
            "body": {
              "mode": "formdata",
              "formdata": [
                {
                  "key": "paraData",
                  "value": "{\n  \"ForDate\": \"2025-01-10\",\n  \"Status\": \"Failed\",\n  \"Remarks\": \"Test By developer rukesh\",\n  \"Amount\": \"0.0\",\n  \"RescheduleDate\": \"2025-01-13\",\n  \"LedgerId\": 3003,\n  \"CashBank\": \"\",\n  \"BankId\": 0,\n  \"ReceiptId\": \"\",\n  \"WitnessName\": \"\",\n  \"HandOverTo\": \"\",\n  \"ResaleCustomerName\": \"\",\n  \"ResaleCustomerAddress\": \"\",\n  \"ResaleCustomerMobile\": \"\",\n  \"ResaleAmount\": 0.0,\n  \"BalanceAmount\": 0.0,\n  \"ChequePostDate\": \"\",\n  \"ChequeNo\": \"\"\n}",
                  "type": "text"
                },
                {
                  "key": "EntityName",
                  "value": "DAILYVISIT",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}//V1/General/AddDynamicData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "",
                "V1",
                "General",
                "AddDynamicData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetDynamicData",
          "request": {
            "method": "POST",
            "header": [
              {
                "key": "AccessKey",
                "value": "Dyn@mic$2023#LiveApi",
                "type": "text"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"tbl\":\"JOBOPENING\",\r\n    \"columns\":\"JobTitle,ApplicationDeadline\",\r\n    \"filter\":\"ApplicationDeadline>'2024-08-12'\"    \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetDynamicData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetDynamicData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCustomData",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"procName\": \"SalesforceDashboard_Sub\",\r\n   \"asParentChild\":false,\r\n   \"ReportType\":1,\r\n   \"RLevel\":1,\r\n   \"tblNames\":\"SalesTeamOverview,SalesTeamOverviewDet:Array\"          \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetMRSCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetMRSCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCustomData Anno",
          "request": {
            "auth": {
              "type": "noauth"
            },
            "method": "POST",
            "header": [
              {
                "key": "AccessKey",
                "value": "Dyn@mic$2023#LiveApi",
                "type": "text"
              }
            ],
            "body": {
              "mode": "raw",
              "raw": "{\r\n      \"procName\": \"JOBOPENING\"      \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "AM_PendingSalesOrder",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"procName\":\"PendingSalesOrder\",\r\n    \"asParentChild\": true,\r\n    \"tblNames\":\"Orders,ItemDetailColl\",\r\n    \"colRelation\":\"TranId,TranId\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetMRSCustomData",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n        \"procName\": \"PendingSalesOrder\",\r\n        \"qry\": \"\",\r\n        \"asParentChild\": true,\r\n        \"tblNames\": \"OrderColl,ItemDetailsColl\",\r\n        \"colRelation\": \"TranId,TranId\",\r\n        \"DateFrom\": \"2025-12-10\",\r\n        \"DateTo\": \"2025-12-10\",   \r\n        \"ShowClosing\": true,\r\n        \"AgentId\": null\r\n}\r\n ",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetCustomData",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCustomData"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetCommonNarration",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "w-fxdr9CINfR7iF8bP_9SD9VSrNCW6HCZAfL7UrscneKPxLdekOVDhmoqBKswn8OXJ4ZJxhYdiRa4QejZ2mFJhqML6X3vU1Wup7_IsPrEwNynr9OMP1bmbLog-yRow-A5n9FwkXTQHMFDg_uI9ifjaM_lvFiLkQC68LJmsCNVJW8BH6GPlq4UyTzCDtYQkLh7d0jP5cWW1G5J2YsCneyc2FDh_V-Q7813s3FWRI7uKWFOEXuG8H_rxxa37hAyHUFxId_WiKq_qCmhqHdHYgIIJVobEu2e0tpX9Mdqo_e5HAygvCP3_Qo2P2i6USvHLGrrmDoNQcRYExk5aPfhORZTlam7hsCThrOMPqwaHLWxyYAxZC21rcc4and7LOjVNc2",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\":1\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetCommonNarration",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetCommonNarration"
              ]
            }
          },
          "response": []
        },
        {
          "name": "DelTransaction",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "TOLQEuGPPw-AeAsfDoKdsZSJt6VE3kur8wAoz53TiMMyZUAgmI_UFDCio9y7SDs2zZcpMdwAj8FYg3LOqokQk5-sQyPIfIGmKl2eQ2NiRA9KPAa66KkwKbNSUF2tDlAnWFsUGDTFY7lY89goMwSwmuZtb0Dd5oITP5dKS2gjviSDMCGaWgjPdFon7t2CL31ZV0YhmSUaKlRxbiF_vSBAIRLMp8PwxoF_eTPCCZRqarH_XWAOL2zHTQfKl2twoUideGXu-n8sU_d-gnN0t5HPsxbVZmSSCSgiuQ7l8zVLeKtaqg4xEsLh_HC5JtaLhn-ogNfGyPeyJyAEMQG-fgPQ9xV7M1UbrHoNcudkCDWltO91Fa6rj6lPBmHthJKCbIe0",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"voucherType\":\"1\",\r\n    \"voucherId\":\"1\",\r\n    \"tranId\":10\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/DelTransaction",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "DelTransaction"
              ]
            }
          },
          "response": []
        },
        {
          "name": "GetSalesmanParentUserId",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"UserId\":4009,     \r\n    \"PassKey\":\"20211031@Nepal#321@BIO\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/General/GetParentUserGPS",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "General",
                "GetParentUserGPS"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Auth",
      "item": [
        {
          "name": "GetPartyAgeing Copy",
          "request": {
            "auth": {
              "type": "noauth"
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "{{token}}/odata/Employee/Products",
              "host": [
                "{{token}}"
              ],
              "path": [
                "odata",
                "Employee",
                "Products"
              ]
            }
          },
          "response": []
        },
        {
          "name": "new token",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [],
            "body": {
              "mode": "urlencoded",
              "urlencoded": [
                {
                  "key": "userName",
                  "value": "admin",
                  "type": "text"
                },
                {
                  "key": "password",
                  "value": "Atf@12345",
                  "type": "text"
                },
                {
                  "key": "grant_type",
                  "value": "password",
                  "type": "text"
                },
                {
                  "key": "dbName",
                  "value": "Pivotal_1043_v1",
                  "type": "text",
                  "disabled": true
                },
                {
                  "key": "appVer",
                  "value": "10.0.0",
                  "type": "text",
                  "uuid": "1d7edc41-6762-49b6-a1d4-0e06ac132b50",
                  "disabled": true
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/token",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "token"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Refresh Token",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [],
            "body": {
              "mode": "urlencoded",
              "urlencoded": [
                {
                  "key": "grant_type",
                  "value": "refresh_token",
                  "type": "text"
                },
                {
                  "key": "refresh_token",
                  "value": "c2a9bae8-c3af-4fb2-9fe9-869dc944da30",
                  "type": "text"
                },
                {
                  "key": "userId",
                  "value": "1",
                  "type": "text"
                }
              ]
            },
            "url": {
              "raw": "{{URL}}/v1/token",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "token"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Wallet",
      "item": [
        {
          "name": "GenFonepayQR",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n   \"amount\":\"14\",\r\n    \"requestId\":\"qwert123436\",\r\n    \"customerName\":\"Sachin Sah\",\r\n    \"mobileno\":\"1111111111\",\r\n    \"quality\":5\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Wallet/GenFonepayQR",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Wallet",
                "GenFonepayQR"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "Dugar",
      "item": [
        {
          "name": "Dugar-SpareSales",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"ForDate\":\"2025-11-18\"     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Dugar/PushSpareSale",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Dugar",
                "PushSpareSale"
              ]
            }
          },
          "response": []
        },
        {
          "name": "Dugar-JobCard",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "{{token}}",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"ForDate\":\"2026-01-08\"     \r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/Dugar/PushJobCard",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "Dugar",
                "PushJobCard"
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "WebSocket",
      "item": [
        {
          "name": "WebSocket Connect",
          "protocolProfileBehavior": {
            "disableBodyPruning": true
          },
          "request": {
            "method": "GET",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"msg\":{\r\n        \"cmd\": \"deletecard\",\r\n\t\t\"serialNo\":\"ZYSA18008238\",\r\n        \"reg\":true,\r\n\t\t\"deviceCompany\":1,\r\n        \"empidcoll\": \"10236997\"\r\n    }\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/WebSocket/Connect",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "WebSocket",
                "Connect"
              ]
            }
          },
          "response": []
        },
        {
          "name": "WebSocket SendMSG",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"msg\":{\"cmd\":\"deleteuser\",\"serialNo\":\"ZYSA18008245\",\"reg\":true,\"deviceCompany\":1,\"empidcoll\":\"10236997\"}\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "{{URL}}/v1/WebSocket/SendMessage",
              "host": [
                "{{URL}}"
              ],
              "path": [
                "v1",
                "WebSocket",
                "SendMessage"
              ]
            }
          },
          "response": []
        }
      ]
    }
  ],
  "auth": {
    "type": "bearer"
  },
  "event": [
    {
      "listen": "prerequest",
      "script": {
        "type": "text/javascript",
        "requests": {},
        "exec": [
          ""
        ]
      }
    },
    {
      "listen": "test",
      "script": {
        "type": "text/javascript",
        "requests": {},
        "exec": [
          ""
        ]
      }
    }
  ],
  "variable": [
    {
      "key": "URL",
      "value": "https://mktdemo.dynamicerp.online/"
    },
    {
      "key": "token",
      "value": "4zV1Hsk3L58Ft3rqqSbTz6-aW9z_ktLmodF95g_Xg2BDEijPwkEd5G3IHYpH9yaUhs7QLneSIdvqfho-klAMJZoH4j0wRVYWIsYIR65fJEPzaCiabKYyRNXnSTfM8ixbQlgpICpNTR8QkqAjf9fWYvnXQJgW-yeybjO_D8R7rdmpf1XdRHdMHyeHmKli7hxIelrXhj9C94xyZKpcM99hlgoqT8uFmCOVyqjLF7tsC56YBWZeQXCNZskt_SoviCPJKlDPudj0X_t9Z2f9zMHG-s96uLCJiPmKNJOzF1hWIkgDsPQA610kgpiIw1NayM82u9z2EK3jZ3XBOOLSltRKOtVc7YS2NUmOpUN9ku2kT9g1P8Pi2zjOFfk-Kch2D_bbhtds_G35eJTitmVHz2UOuj07eoTzrrRgJBfCyy_YKz1gbv3iJswF9dj9lFVq0y6KqO568hDl0CTQF3IgOkdJ2qMuXysTwydrejcaT82uSoI"
    }
  ]
};
