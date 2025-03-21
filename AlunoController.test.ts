import AlunoController from '../src/controllers/AlunoController';
import AlunoService from '../src/services/AlunoService';
import { Request, Response } from 'express';

// Mocks do Jest
jest.mock('../src/services/AlunoService');

describe('AlunoController', () => {
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        mockRequest = {};
        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        jest.clearAllMocks();
    });

    it('deve listar instituições corretamente', async () => {
        const institutionsMock = [{ id: 1, name: "Instituto A" }];
        (AlunoService.getInstitutions as jest.Mock).mockResolvedValue(institutionsMock);

        await AlunoController.getInstitutions(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.json).toHaveBeenCalledWith(institutionsMock);
    });

    it('deve retornar erro ao buscar instituição por ID inválido', async () => {
        (AlunoService.getInstitutionById as jest.Mock).mockRejectedValue(new Error('Instituição não encontrada'));

        mockRequest.params = { id: '999' };
        await AlunoController.getInstitutionById(mockRequest as Request, mockResponse as Response);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Instituição não encontrada' });
    });
});
